//No longer needed
var checkAskLibrarianLimit = 5;
var currentAskLibrarianAttempts = 0;

//Update Ask a Librarian to Chat with a Librarian if someone is staffing LibChat
//Called after Ask a Librarian script is loaded
function updateAskLibrarianText() {
  console.log('updateAskLibrarianText called');
  let status = undefined;
  if (
    document.querySelectorAll('#lcs_slide_out_button-9616').length > 0 &&
    currentAskLibrarianAttempts < checkAskLibrarianLimit
  ) {
    //clearInterval(checkAskLibrarian);
    fetch('https://answers.library.brandeis.edu/1.0/chat/widgets/status/9616')
      .then(response => {
        return response.json();
      })
      .then(data => {
        status = data.online;

        if (status === true) {
          document.getElementById('lcs_slide_out_button-9616').innerText =
            'Chat with a Librarian';
        } else {
          document.getElementById('lcs_slide_out_button-9616').innerText =
            'Ask a Librarian';
        }
      });
    currentAskLibrarianAttempts++;
  }
}

//for continued checking
setInterval(function () {
  let status = undefined;

  fetch('https://answers.library.brandeis.edu/1.0/chat/widgets/status/9616')
    .then(response => {
      return response.json();
    })
    .then(data => {
      status = data.online;

      if (status === true) {
        document.getElementById('lcs_slide_out_button-9616').innerText =
          'Chat with a Librarian';
      } else {
        document.getElementById('lcs_slide_out_button-9616').innerText =
          'Ask a Librarian';
      }
    });
}, 300000);

//Check if window is loaded -- if so, load Ask a Librarian now
if (document.readyState === 'complete') {
  console.log('document ready state is complete!');
  var chatWidget = document.createElement('script');
  chatWidget.type = 'text/javascript';
  chatWidget.async = true;
  chatWidget.src =
    'https://v2.libanswers.com/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61';
  chatWidget.onload = function () {
    updateAskLibrarianText();
  };
  var c = document.getElementsByTagName('script')[0];
  c.parentNode.insertBefore(chatWidget, c);
}
//If window is not loaded, wait until window.load to load Ask a Librarian
else {
  console.log('document ready state is ' + document.readyState);
  window.addEventListener('load', event => {
    var chatWidget = document.createElement('script');
    chatWidget.type = 'text/javascript';
    chatWidget.async = true;
    chatWidget.src =
      'https://v2.libanswers.com/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61';
    chatWidget.onload = function () {
      updateAskLibrarianText();
    };
    var c = document.getElementsByTagName('script')[0];
    c.parentNode.insertBefore(chatWidget, c);
  });
}

(function () {
  /* Load jQuery */
  var jquerymini = document.createElement('script');
  jquerymini.type = 'text/javascript';
  jquerymini.async = true;
  jquerymini.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
  //jquerymini.onload = checkIfCollectionsLoaded;
  var c = document.getElementsByTagName('script')[0];
  c.parentNode.insertBefore(jquerymini, c);

  /* Load LibAnswers
    var LibAnswers = document.createElement("script");
    LibAnswers.type = "text/javascript";
    LibAnswers.async = true;
    LibAnswers.src = "https://v2.libanswers.com/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61";
    var d = document.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(LibAnswers, d);
    */
})();

//TODO: Replace all timeouts with system that automatically checks for whether content is loaded

(function () {
  'use strict';
  'use strict';

  var app = angular.module('viewCustom', [
    'angularLoad',
    'hathiTrustAvailability',
  ]);

  /* app.component('prmGalleryCollectionsListAfter', {
        controller: 'prmCollectionDiscoveryCtrl'
    });*/

  app.component('prmGalleryItemsListAfter', {
    controller: 'prmCollectionDiscoveryCtrl',
  });

  app.controller('prmCollectionDiscoveryCtrl', [
    function () {
      console.log('collection discovery called!');
      checkIfCollectionsLoaded();
    },
  ]);

  app.component('prmSearchResultAvailabilityLineAfter', {
    template:
      '<hathi-trust-availability hide-online="true" ignore-copyright="true" entity-id="https://shibboleth.brandeis.edu/idp/shibboleth"></hathi-trust-availability>',
  });

  app.controller('prmLoansAfterCtrl', [function () {}]);

  app.component('prmLoansAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmLoansAfterCtrl',
    template:
      '<div><h2>Note on ILL Renewal</h2><p>ILL renewal is not available in OneSearch, but can be requested on <a target="_blank" href="https://syshomer.mainlib.brandeis.edu/illiad/illiad.dll?Action=10&Form=66">the ILLiad website here</a>.',
  });

  /* Add Featured Resources */
  app.controller('featuredTextCtrl', [
    '$http',
    '$scope',
    '$sce',
    function ($http, $scope, $sce) {
      $scope.featuredText = 'Loading Featured Resources...';

      // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.

      $http({
        method: 'GET',
        url:
          'https://mrmt.library.brandeis.edu/cgi-bin/alerts/primo_rss_feature.pl',
      }).then(
        function successCallback(response) {
          $scope.featuredText = $sce.trustAsHtml(
            response.data.replace(/document\.write\(\'|\'\);|\\/g, '')
          );
          //console.log($scope.featuredText);
        },
        function errorCallback(response) {
          $scope.featuredText = 'More new resources coming soon!';
        }
      );
    },
  ]);

  /* Add Primo LTS Alert */
  app.controller('alertTextCtrl', [
    '$http',
    '$scope',
    '$sce',
    function ($http, $scope, $sce) {
      $scope.alertText = '';

      // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.

      $http({
        method: 'GET',
        url:
          'https://mrmt.library.brandeis.edu/cgi-bin/alerts/primo_lts_alert.pl',
      }).then(
        function successCallback(response) {
          $scope.alertText = $sce.trustAsHtml(
            response.data.replace(/document\.write\(\'|\'\);|\\/g, '')
          );
        },
        function errorCallback(response) {
          $scope.alertText = '';
        }
      );
    },
  ]);

  /* Add Scholar Alert */
  app.controller('scholarTextCtrl', [
    '$http',
    '$scope',
    '$sce',
    function ($http, $scope, $sce) {
      $scope.scholarText = '';

      // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.

      /*$http({
    method: 'GET',
    url: 'https://mrmt.library.brandeis.edu/cgi-bin/alerts/scholar_rss_news.pl'
}).then(function successCallback(response) {
    $scope.scholarText = $sce.trustAsHtml(response.data.replace(/document\.write\(\'|\'\);|\\/g, ''));
    //console.log($scope.scholarText);
}, function errorCallback(response) {
    $scope.scholarText = "";
});*/
    },
  ]);

  /* End Add Featured Resources */

  /* Show Scopes dropdown by default and insert custom placeholder text */

  app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController',
    template: '<div id="iconTray" style="padding:5px;"></div></div></div>',
  });

  app.controller('SearchBarAfterController', [
    '$scope',
    '$translate',
    function ($scope, $translate) {
      //shows scopes dropdown by default
      $scope.$parent.$ctrl.showTabsAndScopes = true;

      //Change initial value based on selected tab. Disabled for now because it's slow and probably unnecessary
      /*
var myVar = setInterval(function(parentCtrl) {
    parentCtrl._placeHolderText = calculatePlaceHolderText(parentCtrl._selectedTab);
    console.log("placeholder changed");
}, 100, this.parentCtrl);

setTimeout(function( myIntervalID ) {
    clearInterval(myIntervalID);
    console.log("placeholder interval cleared");
}, 5000, myVar);
*/

      //insert custom placeholder text when scope is switched
      $scope.$watch('$parent.$ctrl._selectedTab', function (newTab, oldTab) {
        $scope.$parent.$ctrl._placeHolderText = calculatePlaceHolderText(
          newTab
        );
      });

      //Function to calculate placeholder text based on tab code
      function calculatePlaceHolderText(myTab) {
        switch (myTab) {
          case 'pci':
            return 'Find articles from journals, newspapers, and online collections';
            break;
          case 'alma':
            return 'Find books, movies, music, serials, etc';
            break;
          case 'everything':
            return 'Find ALL kinds of library resources (books, movies, journal articles, etc)';
            break;
          case 'course':
            return 'Find books & media on reserve for your class.';
            break;
          default:
            return 'Search';
        }
      }
    },
  ]);

  //}
  /* End Show Scopes... */

  /* Remove disabled attribute from showPnx=true page to make usable again */
  app.controller('prmFullViewPageAfterController', [
    function () {
      //The PNX record in the New UI is set to be disabled instead of readonly, and the scrollbar for the textarea containing the record text is hidden via css overflow=hidden. Basically, the styles and attributes make it broken, and this fixes it.
      function fixTextArea() {
        document
          .getElementsByTagName('textarea')[0]
          .removeAttribute('disabled', '');
        document
          .getElementsByTagName('textarea')[0]
          .setAttribute('readonly', 'readonly');
        document
          .getElementsByTagName('textarea')[0]
          .setAttribute('style', 'border:none; width: 100%; height: 99vh;');
      }

      //setTimeout has to be used because of the way angular loads elements asyncronously
      setTimeout(fixTextArea, 1000);

      //run it twice just in case the browser loads slowly
      setTimeout(fixTextArea, 2000);
    },
  ]);

  app.component('prmFullViewPageAfter', {
    bindings: {},
    controller: 'prmFullViewPageAfterController',
  });
  /* End Remove disabled attribute... */

  /* Make prm-full-view elements not keyboard focusable */

  app.component('prmFullViewAfter', {
    bindings: {},
    controller: 'prmFullViewAfterController',
  });

  app.controller('prmFullViewAfterController', [
    function () {
      //The PNX record in the New UI is set to be disabled instead of readonly, and the scrollbar for the textarea containing the record text is hidden via css overflow=hidden. Basically, the styles and attributes make it broken, and this fixes it.
      function fixTabIndex() {
        $('prm-full-view').removeAttr('tabindex').blur();
      }

      //setTimeout has to be used because of the way angular loads elements asyncronously
      setTimeout(fixTabIndex, 1000);

      //run it twice just in case the browser loads slowly
      setTimeout(fixTabIndex, 2000);
    },
  ]);

  /* End Make prm-full-view elements not keyboard focusable */

  /* Fix accessibility */

  /* remove skip to results, skip to facets, and skip to make menu links */

  app.controller('prmSkipToAfterController', [
    '$filter',
    function ($filter) {
      //console.time('Fix SkipTo');

      //remove skipTo Links that do not work well with screen readers because they use page scrolling instead of internal page linking

      //Get access to the service used by the skip to directive to create links
      var myContainer = this.parentCtrl.skipToService;

      //access to the list of link codes for the page
      var searchLinks = myContainer.skipLinksObject['exploreMain.search'];

      //use custom filters to remove the codes for everything but skip to search.
      //myContainer.skipLinksObject["exploreMain.search"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!facets'), '!mainMenu');
      //myContainer.skipLinksObject["exploreMain.jsearch"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!facets'), '!mainMenu');
      //myContainer.skipLinksObject["exploreMain.favorites"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!favoritesLabels'), '!mainMenu');
      //myContainer.skipLinksObject["exploreMain.citationTrails"] = $filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!mainMenu');
      //myContainer.skipLinksObject["account"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!backtosearch'), '!accountoverview'), '!banner);

      //console.timeEnd('Fix SkipTo');
    },
  ]);

  /* Add a consistent h1 heading at the beginning of every page for accessibility purposes */
  /*
app.component('prmSkipToAfter', {
bindings: { parentCtrl: '<' },
controller: 'prmSkipToAfterController',
template: '<h1 class="accessible-brandeis" >Brandeis OneSearch</h1>'
});*/

  /*General Accessibility controller to run jQuery functions to change element attributes, mainly aria-labels, roles, and alts. This controller is run on several components */
  app.controller('AccessibilityController', [
    '$timeout',
    function ($timeout) {
      function fixAccessibility() {
        //console.time("fixAccessibility");
        // Make tabs selector accessible

        //TODO: There are better semantics than button for these
        //md-select: adding the button role makes voiceover direct the use to click to access the menu
        //md-option: You have to click it to select anything so it's a button
        $('md-select, md-option')
          .not("[role|='button']")
          .attr('role', 'button');

        //adding the listbox role improves voiceover navigation
        //$('#select_container_3 md-content').attr('role','listbox');
        $('md-content').not("[role|='listbox']").attr('role', 'listbox');

        //This adds a meaningful option name to the scope options
        $('#select_container_4 md-option').attr('aria-label', function () {
          return 'Search in ' + this.children[0].children[0].innerHTML;
        });

        //This adds a meaningful message for the default search. Without this it just says "select search tab" with no mention of what is selected
        $("[aria-label|='Select search tab']").attr(
          'aria-label',
          'Select how much to search'
        );

        //Add alt-text to logo link
        /*  $('prm-logo #banner a').not('[aria-label|=\'Link to home page. Use this link to return to the simple search page\']').attr('aria-label','Link to home page. Use this link to return to the simple search page'); */

        //Fix main menu aria-labels, both inset and overlay
        $(
          "[aria-label|='Contact Us'],[translate*='mainmenu.label.contact_us']"
        ).attr(
          'aria-label',
          'Contact Us. Opens a new window to a form to contact Brandeis Library Staff.'
        );
        $(
          "[aria-label|='Find Journals'],[translate*='mainmenu.label.journalsearch']"
        ).attr(
          'aria-label',
          'Find journals.  Find journals held by Brandeis Library.'
        );
        $(
          "[aria-label|='Find Databases'],[translate*='mainmenu.label.find_databases']"
        ).attr(
          'aria-label',
          'Find Databases, opens in a new window. Find databases Brandeis Library subscribes to.'
        );
        $("[aria-label|='ILL'],[translate*='mainmenu.label.ill']").attr(
          'aria-label',
          'Interlibrary Loan (ILL), opens a new window to more information on Interlibrary Loan (ILL).'
        );
        $("[aria-label|='Browse'],[translate*='mainmenu.label.browse']").attr(
          'aria-label',
          'Browse by subject, author, title or call number.'
        );

        //Removed since ExL has addede More Options aria label to span
        //$('#more-links-button').attr('aria-label','More Options Button. Clicking this button will open an overlay containing additional Main Menu options.');

        //TODO: These don't work and are very verbose -- figure out whether they're work keeping.
        //Fix sign in and sign out button labels depending on is the user is logged in or not
        if ($('.user-name').html() == 'Sign In ') {
          $("[aria-label|='Open user actions menu']").attr(
            'aria-label',
            'You are currently using OneSearch as a Guest user. Click to open a two button sign in menu with options to sign in and access your library account'
          );
          $("[aria-label|='Go To My Account']").attr(
            'aria-label',
            'If you sign in this button will navigate to a new OneSearch page with your library account information. Since you are not logged in this button will navigate to a new OneSearch page with the login options.'
          );
        } else {
          $("[aria-label|='Open user actions menu']").attr(
            'aria-label',
            'You are currently logged in as ' +
              $('.user-name').html() +
              '. Click to open a two button sign in menu with options to sign out and access your library account'
          );
          $("[aria-label|='Go To My Account']").attr(
            'aria-label',
            'Since you have already signed in, this button will navigate to a new OneSearch page with your library account information. If you were not logged in, this button would navigate to a new OneSearch page with the login options.'
          );
        }

        $("prm-user-area [aria-label|='Sign in']").attr(
          'aria-label',
          'Click to navigate to a new OneSearch page with the login options. Move focus to another element in this page or use the escape key to close this two-button sign in menu.'
        );
        $("prm-user-area [aria-label|='Sign out']").attr(
          'aria-label',
          'Click to sign out of OneSearch and navigate to the OneSearch home page. Move focus to another element in this page or use the escape key to close this two-button sign in menu.'
        );

        //TODO: Flesh this out for each image (probably based on src attribute).  Aria-labels all just appear as multiple versions for some reason -- not sure why ExL hasn't addressed this.
        //Add alt and aria-label attributes to material type icons
        $("[alt|='Multiple Versions Image'],.fallback-img").attr({
          alt: 'Book Icon',
          'aria-label': 'Book Icon',
        });

        /* This element was causing this accessibility error: "This element's role is "presentation" but contains child elements with semantic meaning." */
        $('md-virtual-repeat-container').removeAttr('role');

        //This element was missing an aria-label
        $("input[ng-model|='row.searchQuery']").each(function (idx, element) {
          if ($(element).attr('aria-label') == undefined)
            $(element).attr('aria-label', 'Search Query Text');
        });

        //this element was missing an aria-label
        $('button.switch-to-simple').each(function (idx, element) {
          if ($(element).attr('aria-label') == undefined) {
            $(element).attr('aria-label', 'Switch to Simple Search');
          }
        });

        //this element was missing an aria-label
        $("[ng-click|='$ctrl.switchAdvancedSearch()']").each(function (
          idx,
          element
        ) {
          if ($(element).attr('aria-label') == undefined) {
            $(element).attr('aria-label', 'Switch to Advanced Search');
          }
        });

        //TODO: This is a constructive change, but I think it never run because clicking on a result doesn't trigger a page refresh
        //iframes need a title element to be wcag 2.0 AA compliant. The alma get it mashup does not have one
        $('.mashup-iframe')
          .not("[title|='Request and Access and Loan Information']")
          .attr('title', 'Request and Access and Loan Information');

        //This submit input that exists specifically for accessibility purposes does not have an aria-label
        $("input.accessible-only[type|='submit']")
          .not("[aria-label|='Submit Find Journals Search']")
          .attr('aria-label', 'Submit Find Journals Search');

        //The submit button on the Browse page should be type submit instead of type button for accessibility purposes
        $('.submit-button').not("[type|='submit']").attr('type', 'submit');

        //The title is undefined on the browse search page.
        if ($('#primoExploreTitle').innerHTML == undefined) {
          document.title = 'Brandeis Library OneSearch';
        }

        //The previous page button has no aria-label on the browse search result page for the first page of results
        if (
          $('div.counter-prev a').attr('aria-label') == undefined ||
          $('div.counter-prev a').attr('aria-label') == ''
        ) {
          $('div.counter-prev a').attr('aria-label', 'Go to Previous Page');
        }

        //These two elements have a tabindex attribute which makes them focusable, but they shouldn't be focusable
        //$('#mainResults').removeAttr('tabindex');
        //$('prm-search-result-list').removeAttr('tabindex');

        //TODO: Possibly confirm that these will work with Web Accessibility Specialist, but it looks like this is the use case that these were designed for.
        //Code in progress to be improved by consultation with Web Accessibility Specialist
        $('#mainResults').not("[role|='list']").attr('role', 'list');
        $('prm-brief-result-container')
          .not("[role|='listitem']")
          .attr('role', 'listitem');
      }

      //Run ASAP and then again in 3 second to make sure. This whole function take between 5 and 12 ms, and runs two or 3 times per page load, so about 6 times total.
      $timeout(fixAccessibility, 10);
      $timeout(fixAccessibility, 3000);
    },
  ]);

  app.component('prmAdvancedSearchAfter', {
    controller: 'AccessibilityController',
  });
  app.component('prmPageNavMenuAfter', {
    controller: 'AccessibilityController',
  });
  app.component('prmSearchAfter', {
    controller: 'AccessibilityController',
  });
  app.component('prmBrowseSearchAfter', {
    controller: 'AccessibilityController',
  });

  /* specific controller to run jQuery functions to change IDs and an image alt attributes, run only on prmIconAfter. prmIconAfter directives are probably the last directives to be loaded because they are nested the most deeply in the page. Since prmIconAfter appears so often and this code is run many times on the search results page, it has been optimized for speed */
  app.controller('prmIconAfterController', [
    '$timeout',
    function ($timeout) {
      function fixAccessibility() {
        var duplicateIds = [
          'select_value_label',
          'chevron-up',
          'briefResultMoreOptionsButton',
        ];

        /* This is identical to the code block directly below, but it runs much slower

    console.time('jquery');
    $.each(duplicateIds, function(idx, element) { $('[id*=\''+element+'\']').each( function (idx, element) {
        var myID = $(element).attr('id');
        var myElements = $('[id|=\''+myID+'\']');
        if (myElements.length > 1) {
                $.each(myElements, function(idx, element) {  if (idx >0) $(element).attr('id',$(element).attr('id')+'_'+idx); } );
        }
    })});

    console.timeEnd('jquery'); */

        /* This code finds duplicate ids based on the array defined above and changes their ids to be distinct. This is done to fix accessibility errors according to the WCAG 2.0 AA standards */

        //console.time('minimal jquery');

        for (var i = duplicateIds.length - 1; i > -1; i--) {
          var myElements = $("[id*='" + duplicateIds[i] + "']");
          for (var j = myElements.length - 1; j > -1; j--) {
            //AGRS removed the lines below to make it run faster, even though it might change IDs that are unique. This broadness is created in the definition of myElements above because it uses *= which is a contains comparison. This is necessary because the select_value_label_* id elements change the numeric suffix randomly.
            //var myID = myElements[j].getAttribute('id');
            myElements[j].setAttribute('id', duplicateIds[i] + '_' + j);
            /* var myIdenticalElements = $('[id|=\''+myID+'\']');
            for (var k=myIdenticalElements.length-1; k>0; k--) {
                myIdenticalElements[k].setAttribute('id', myID+'_'+k);
            } */
          }
        }

        //console.timeEnd('minimal jquery');

        //console.time('beacon fix');

        //This code adds an alt tag to the image in order to pass accessibility standards

        $("img[src*='https://beacon01.alma.exlibrisgroup.com']")
          .not("[alt|='No content image, please ignore']")
          .attr('alt', 'No content image, please ignore');

        //console.timeEnd('beacon fix');
      }

      //This controller code is run every time an icon is loaded, so it only needs to be run initiated once in the controller.
      $timeout(fixAccessibility, 10);
    },
  ]);

  app.component('prmIconAfter', {
    controller: 'prmIconAfterController',
  });

  /* Embed LibAnswers widget in footer
app.component('prmExploreMainAfter', {
template: '<div id="s-la-widget-7565"></div>'
});

*/

  /* Google Analytics */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  );

  if (
    window.location.hostname == 'search.library.brandeis.edu' ||
    window.location.hostname == 'brand-primo.hosted.exlibrisgroup.com'
  ) {
    ga('create', 'UA-43138135-1', 'auto');
  }
  if (
    window.location.hostname == 'search-test.library.brandeis.edu' ||
    window.location.hostname == 'brand-primosb.hosted.exlibrisgroup.com'
  ) {
    ga('create', 'UA-43138135-2', 'auto');
  }
  ga('send', 'pageview');

  /* code below from Jeff Peterson as UMN obtained here: https://exlibrisusers.org/cgi-bin/mailman/private/primo/2017-February/020545.html */

  app.run([
    '$rootScope',
    '$location',
    '$window',
    function ($rootScope, $location, $window) {
      $rootScope.$on('$locationChangeSuccess', function (event) {
        $window.ga('send', 'pageview', { location: $location.url() });
      });
    },
  ]);
})();

/* STACKMAP integration */

(function () {
  var script = document.createElement('script');
  script.id = 'StackMapScript';
  /* AGRS made a local copy of the stackmap script at
https://stackmap.com/integration/brandeis-primo2/StackMap.js
so i could make changes that would make the page more accessible.
Those changes were to remove an h2 heading for accessibility purposes
and add aria-labels to the print and close buttons. */
  /* Undoing above change so updates Stack Maps have made can get added to the
 script without having to copy it over again. Stack Maps is also aware of the
 above and will be adding them to their script - Rich */
  script.src = 'https://stackmap.com/integration/brandeis-primo2/StackMap.js';
  document.head.appendChild(script);

  var link = document.createElement('link');
  link.id = 'StackMapSheet';
  link.rel = 'stylesheet';
  link.media = 'all';
  link.type = 'text/css';
  link.href = 'https://stackmap.com/integration/brandeis-primo2/StackMap.css';
  document.head.appendChild(link);

  var smlink2 = document.createElement('link');
  smlink2.rel = 'stylesheet';
  smlink2.type = 'text/css';
  smlink2.href =
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
  document.body.appendChild(smlink2);
})();

angular
  .module('hathiTrustAvailability', [])
  .constant(
    'hathiTrustBaseUrl',
    'https://catalog.hathitrust.org/api/volumes/brief/json/'
  )
  .config([
    '$sceDelegateProvider',
    'hathiTrustBaseUrl',
    function ($sceDelegateProvider, hathiTrustBaseUrl) {
      var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
      urlWhitelist.push(hathiTrustBaseUrl + '**');
      $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
    },
  ])
  .factory('hathiTrust', [
    '$http',
    '$q',
    'hathiTrustBaseUrl',
    function ($http, $q, hathiTrustBaseUrl) {
      var svc = {};

      var lookup = function lookup(ids) {
        if (ids.length) {
          var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
          return $http
            .jsonp(hathiTrustLookupUrl, {
              cache: true,
              jsonpCallbackParam: 'callback',
            })
            .then(function (resp) {
              return resp.data;
            });
        } else {
          return $q.resolve(null);
        }
      };

      // find a HT record URL for a given list of identifiers (regardless of copyright status)
      svc.findRecord = function (ids) {
        return lookup(ids)
          .then(function (bibData) {
            if (bibData && bibData[ids[0]].items.length > 0) {
              var recordId = Object.keys(bibData[ids[0]].records)[0];
              return $q.resolve(bibData[ids[0]].records[recordId].recordURL);
            } else {
              return $q.resolve(null);
            }
          })
          .catch(function (e) {
            console.log(e);
          });
      };

      // find a public-domain HT record URL for a given list of identifiers
      svc.findFullViewRecord = function (ids) {
        var handleResponse = function handleResponse(bibData) {
          var fullTextUrl = null;
          for (var i = 0; !fullTextUrl && i < ids.length; i++) {
            var result = bibData[ids[i]];
            for (var j = 0; j < result.items.length; j++) {
              var item = result.items[j];
              if (item.usRightsString.toLowerCase() === 'full view') {
                fullTextUrl = result.records[item.fromRecord].recordURL;
                break;
              }
            }
          }
          return $q.resolve(fullTextUrl);
        };
        return lookup(ids)
          .then(handleResponse)
          .catch(function (e) {
            console.log(e);
          });
      };

      return svc;
    },
  ])
  .controller('hathiTrustAvailabilityController', [
    'hathiTrust',
    function (hathiTrust) {
      var self = this;

      self.$onInit = function () {
        setDefaults();
        if (!(isOnline() && self.hideOnline) && publishedBefore2018()) {
          updateHathiTrustAvailability();
        }
      };

      var setDefaults = function setDefaults() {
        if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
      };

      var publishedBefore2018 = function () {
        var creationDate = parseInt(
          self.prmSearchResultAvailabilityLine.result.pnx.addata.date
        );
        console.log('creationDate');
        console.log(creationDate);
        // if (creationDate){
        //console.log("enters creationDate if");
        if (creationDate >= 2018) {
          return false;
        } else {
          return true;
        }
        // }
      };

      var isOnline = function isOnline() {
        return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(
          function (g) {
            return g.links.some(function (l) {
              return l.isLinktoOnline;
            });
          }
        );
      };

      var formatLink = function formatLink(link) {
        return self.entityId ? link + '?signon=swle:' + self.entityId : link;
      };

      var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
        var hathiTrustIds = (
          self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []
        ).map(function (id) {
          return 'oclc:' + id;
        });
        hathiTrust[self.ignoreCopyright ? 'findRecord' : 'findFullViewRecord'](
          hathiTrustIds
        ).then(function (res) {
          if (res) self.fullTextLink = formatLink(res);
        });
      };
    },
  ])
  .component('hathiTrustAvailability', {
    require: {
      prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine',
    },
    bindings: {
      entityId: '@',
      ignoreCopyright: '<',
      hideOnline: '<',
      msg: '@?',
    },
    controller: 'hathiTrustAvailabilityController',
    template:
      '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                <md-icon alt="HathiTrust Logo">\
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">  <image id="image0" width="16" height="16" x="0" y="0"\
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\
                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEXuegXvegTsewTveArw\
                  eQjuegftegfweQXsegXweQbtegnsegvxeQbvegbuegbvegbveQbtegfuegbvegXveQbvegbsfAzt\
                  plfnsmfpq1/wplPuegXvqFrrq1znr2Ptok/sewvueQfuegbtegbrgRfxyJPlsXDmlTznnk/rn03q\
                  pVnomkjnlkDnsGnvwobsfhPveQXteQrutHDqpF3qnUnpjS/prmDweQXsewjvrWHsjy7pnkvqqGDv\
                  t3PregvqhB3uuXjusmzpp13qlz3pfxTskC3uegjsjyvogBfpmkHpqF/us2rttXLrgRjrgBjttXDo\
                  gx/vtGznjzPtfhHqjCfuewfrjCnwfxLpjC7wtnDogBvssmjpfhLtegjtnEjrtnTmjC/utGrsew7s\
                  o0zpghnohB/roUrrfRHtsmnlkTbrvH3tnEXtegXvegTveQfqhyHvuXjrrGTpewrsrmXqfRHogRjt\
                  q2Dqewvqql/wu3vqhyDueQnwegXuegfweQPtegntnUvnt3fvxI7tfhTrfA/vzJvmtXLunEbtegrw\
                  egTregzskjbsxI/ouoPsqFzniyrz2K3vyZnokDLpewvtnkv30J/w17XsvYXjgBbohR7nplnso1L0\
                  1Kf40Z/um0LvegXngBnsy5juyJXvsGftrGTnhB/opVHoew7qhB7rzJnnmErkkz3splbqlT3smT3t\
                  tXPqqV7pjzHvunjrfQ7vewPsfA7uoU3uqlruoEzsfQ/vegf///9WgM4fAAAAFHRSTlOLi4uLi4uL\
                  i4uLi4uLi4tRUVFRUYI6/KEAAAABYktHRLvUtndMAAAAB3RJTUUH4AkNDgYNB5/9vwAAAQpJREFU\
                  GNNjYGBkYmZhZWNn5ODk4ubh5WMQERUTl5CUEpWWkZWTV1BUYlBWUVVT19BUUtbS1tHV0zdgMDQy\
                  NjE1MzRXsrC0sraxtWOwd3B0cnZxlXZz9/D08vbxZfDzDwgMCg4JdQsLj4iMio5hiI2LT0hMSk5J\
                  TUvPyMzKzmHIzcsvKCwqLiktK6+orKquYZCuratvaGxqbmlta+8QNRBl6JQ26Oru6e3rnzBx0uQ8\
                  aVGGvJopU6dNn1E8c9bsOXPniYoySM+PXbBw0eIlS5fl1C+PFRFlEBUVXbFy1eo1a9fliQDZYIHY\
                  9fEbNm7avEUUJiC6ddv2HTt3mSuBBfhBQEBQSEgYzOIHAHtfTe/vX0uvAAAAJXRFWHRkYXRlOmNy\
                  ZWF0ZQAyMDE2LTA5LTEzVDE0OjA2OjEzLTA1OjAwNMgVqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAx\
                  Ni0wOS0xM1QxNDowNjoxMy0wNTowMEWVrRQAAAAASUVORK5CYII=" />\
                  </svg> \
                </md-icon>\
                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                {{ ::$ctrl.msg }}\
                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                </a>\
              </span>',
  });

function fixCollectionDiscovery() {
  console.log('is $ undefined?');
  console.log(typeof $);
  //angular.element(function () {

  if (window.location.href.search('collectionDiscovery') > -1) {
    if (
      document
        .querySelector('prm-collection-gallery h2')
        .innerText.search('Items in this collection') == -1
    ) {
      fixCollectionDiscoveryPage();
    } else {
      fixItemDiscoveryPage();
    }
  }

  //});
}

function fixCollectionDiscoveryPage() {
  console.log('fix colldiscovery called!');
  titlesToBeAdded = [];

  var itemTitles = document.querySelectorAll('.item-title h3');

  if (itemTitles.length == 0) {
    console.log('%c EMPTY DUH DUH DUH', 'font-size: 48pt');
  }

  for (title of itemTitles) {
    ariaLabelToBeAdded = title.innerText;
    titlesToBeAdded.push(ariaLabelToBeAdded);
  }

  var itemIter = 0;

  var collectionElements = document.querySelectorAll(
    'prm-gallery-collection a'
  );

  for (collection of collectionElements) {
    var currentAriaLabel = collection.getAttribute('aria-label');
    var newAriaLabel =
      'Click to browse the ' + ' ' + titlesToBeAdded[itemIter] + ' collection';
    collection.setAttribute('aria-label', newAriaLabel);
    console.log('newAriaLabel');
    console.log(newAriaLabel);
    itemIter++;
  }

  var pinElements = document.querySelectorAll(
    'prm-collection-gallery button.pin-button'
  );

  itemIter = 0;

  for (pin of pinElements) {
    var currentAriaLabel = pin.getAttribute('aria-label');
    var newAriaLabel = 'Pin ' + titlesToBeAdded[itemIter] + ' collection';
    pin.setAttribute('aria-label', newAriaLabel);
    console.log(newAriaLabel);
    itemIter++;
  }
}

function fixItemDiscoveryPage() {
  console.log('fix itemdiscovery called!');
  titlesToBeAdded = [];

  var itemTitles = document.querySelectorAll('h3.item-title');

  if (itemTitles.length == 0) {
    console.log('%c EMPTY DUH DUH DUH', 'font-size: 48pt');
  }

  for (title of itemTitles) {
    ariaLabelToBeAdded = title.innerText;
    titlesToBeAdded.push(ariaLabelToBeAdded);
  }

  typesToBeAdded = [];

  var itemTypes = document.querySelectorAll(
    'prm-gallery-item .item-info .resource-type span'
  );

  for (type of itemTypes) {
    ariaLabelToBeAdded = type.innerText;
    typesToBeAdded.push(ariaLabelToBeAdded);
  }

  var collectionElements = document.querySelectorAll(
    'prm-gallery-item div.collection-element'
  );

  var itemIter = 0;

  for (collection of collectionElements) {
    console.log('collection is');
    console.log(collection);
    var currentAriaLabel = collection.getAttribute('aria-label');
    var newAriaLabel =
      typesToBeAdded[itemIter] +
      ' - ' +
      titlesToBeAdded[itemIter] +
      ' ' +
      ' ' +
      currentAriaLabel;
    collection.setAttribute('aria-label', newAriaLabel);

    console.log(newAriaLabel);
    itemIter++;
  }

  var pinElements = document.querySelectorAll(
    'prm-collection-gallery button.pin-button'
  );

  itemIter = 0;

  for (pin of pinElements) {
    var currentAriaLabel = pin.getAttribute('aria-label');
    var newAriaLabel = 'Pin ' + titlesToBeAdded[itemIter];
    pin.setAttribute('aria-label', newAriaLabel);
    console.log(newAriaLabel);
    itemIter++;
  }
}

//var checkRenewInterval = setInterval(checkRenewLinks, 500);

function checkRenewLinks() {
  console.log('checkRenewLinks');
  if (document.querySelectorAll('prm-loan span').length > 0) {
    console.log(
      'length is ' + document.querySelectorAll('prm-loan span').length
    );
    clearInterval(checkRenewInterval);
    fixRenewLinks();
  }
}

function fixRenewLinks() {
  console.log('fix Renew links called!');
  document.querySelectorAll('prm-loan span').forEach(function (item) {
    console.log('enters query selector all');
    console.log(item);
    if (item.innerHTML == 'Not Renewable') {
      item.innerHTML =
        '<a href="https://syshomer.mainlib.brandeis.edu/illiad/illiad.dll">Renew in ILLiad</a>';
    }
  });
}

var collectionsInterval;

function checkIfCollectionsLoaded() {
  //collectionsInterval is a number once interval is initialized
  if (typeof collectionsInterval !== 'number') {
    collectionsInterval = setInterval(checkCollectionCount, 1000);
    console.log('new interval created');
  }
}

function checkCollectionCount() {
  console.log('checkCollectionCount');
  /*if (($('prm-collection-gallery h2').length > 0) || ($('span.results-count').length > 0)) {
        //console.log("results over 0");
        clearInterval(collectionsInterval);
        collectionsInterval = '';
        fixCollectionDiscovery();
        addFindingAidLink();
   }
   else {

    }*/
  changeCollectionHomepageStyles();
}

function addFindingAidLink() {
  console.log('add finding aid link!');
  var collectionInfo = document.querySelector('div.collection-info p');
  if (collectionInfo.innerText.search('http://') !== -1) {
    var oldLinkText = collectionInfo.innerText.substring(
      collectionInfo.innerText.search('http://')
    );
    var newLinkHTML =
      '<a id="findingAidLink" href="' +
      oldLinkText +
      '">' +
      'Finding aid link' +
      '</a>';
    //console.log("newLinkHTML");
    //console.log(newLinkHTML);
    collectionInfo.innerHTML = collectionInfo.innerHTML.replace(
      'Finding aid link:',
      ''
    );
    collectionInfo.innerHTML = collectionInfo.innerHTML.replace(
      oldLinkText,
      newLinkHTML
    );
  }
}

function changeCollectionHomepageStyles() {
  console.log('change called');
  if (
    document.location.href ==
      'https://search.library.brandeis.edu/primo-explore/collectionDiscovery?vid=BRAND' ||
    document.location.href ==
      'https://search-test.library.brandeis.edu/primo-explore/collectionDiscovery?vid=BRAND'
  ) {
    document
      .querySelector('prm-collection-discovery .collection-info p')
      .setAttribute('style', 'color: black !important;  text-shadow: none;');
    document
      .querySelector('prm-collection-discovery h1.collection-title')
      .setAttribute('style', 'color: black !important;  text-shadow: none;');
  }
}
