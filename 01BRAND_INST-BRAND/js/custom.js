(function () {
  'use strict';
  'use strict';

  var app = angular.module('viewCustom', [
    'angularLoad',
    'hathiTrustAvailability',
  ]);

  ('use strict');
  ('use strict');
  var nonhathiTrustMember = false;
  ('use strict');
  ('use strict');

  /*----------below is the code for libchat-----------*/
  // Adds the chat button
  (function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src =
      ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'v2.libanswers.com/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(lc, s);

    //for page load
    window.addEventListener('load', event => {
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
    });
  })();

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
  }, 60000);
  /*---------------libchat code ends here---------------*/

  /*----------twitter starts here-----------*/
  // Adds the chat button
  window.twttr = (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, 'script', 'twitter-wjs');
  /*---------------twitter end---------------*/

  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
  app.controller('SearchResultAvailabilityLineAfterController', [
    function () {
      var vm = this;
    },
  ]);


 app.component('prmExploreFooterAfter', {

             bindings: { parentCtrl: '<' },

             template: '<div id="footerWrapper"><md-content layout=row layout-xs=column><div flex=33 layout=column><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Find More</span></h2></md-card-title-text></md-card-title><md-card-content><a href=http://lts.brandeis.edu/research/archives-speccoll/ >University Archives and Special Collections</a><br><a href=https://scholarworks.brandeis.edu>Brandeis ScholarWorks</a><br><a href=http://brandeis.on.worldcat.org/ >WorldCat (Search Libraries Worldwide)</a><br><a href=http://www.brandeis.edu/library/research/books-articles/database-trials.html>Database Trials</a><br></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Library Services</span></h2></md-card-title-text></md-card-title><md-card-content><a href=https://www.brandeis.edu/library/about/hours/index.html>Library Hours</a><br><a href=https://www.brandeis.edu/library/borrowing/index.html>Borrowing</a><br><a href=https://www.brandeis.edu/library/borrowing/document-delivery.html target=_blank>Scan on Demand (formerly Document Delivery)</a><br></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Get Help</span></h2></md-card-title-text></md-card-title><md-card-content><a href=https://guides.library.brandeis.edu/eresources>E-Resource Help</a><br><a href=https://www.brandeis.edu/library/research/help/index.html>Research Help</a><br><a href=https://guides.library.brandeis.edu/more_guides/citing_sources>Citing Sources</a><br><a href=https://guides.library.brandeis.edu/ >Research Guides</a><br></md-card-content></div></md-content></div>'

    });
    
  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    template:
      '<hathi-trust-availability-studio  ignore-copyright="true" hide-online="true" entity-id="https://shibboleth.brandeis.edu/idp/shibboleth" >',
  });

  app.component('prmGalleryItemsListAfter', {
    controller: 'prmCollectionDiscoveryCtrl',
  });

  app.controller('prmCollectionDiscoveryCtrl', [
    function () {
      console.log('collection discovery called!');
      addFindingAidLink();
    },
  ]);

  //Auto generated code by primo app store DO NOT DELETE!!! -END-

  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  angular
    .module('hathiTrustAvailability', [])
    .value('hathiTrustIconPath', 'custom/CENTRAL_PACKAGE/img/hathitrust.svg')
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
      function ($http, $q) {
        var svc = {};
        var hathiTrustBaseUrl =
          'https://catalog.hathitrust.org/api/volumes/brief/json/';

        svc.findFullViewRecord = function (ids) {
          var deferred = $q.defer();

          var handleResponse = function handleResponse(resp) {
            var data = resp.data;
            var fullTextUrl = null;
            for (var i = 0; !fullTextUrl && i < ids.length; i++) {
              var result = data[ids[i]];
              for (var j = 0; j < result.items.length; j++) {
                var item = result.items[j];
                if (item.usRightsString) {
                  fullTextUrl = result.records[item.fromRecord].recordURL;
                  break;
                }
              }
            }
            deferred.resolve(fullTextUrl);
          };

          if (ids.length) {
            var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
            $http
              .jsonp(hathiTrustLookupUrl, {
                cache: true,
                jsonpCallbackParam: 'callback',
              })
              .then(handleResponse)
              .catch(function (e) {
                console.log(e);
              });
          } else {
            deferred.resolve(null);
          }

          return deferred.promise;
        };

        return svc;
      },
    ])
    .controller('hathiTrustAvailabilityStudioController', [
      'hathiTrust',
      'hathiTrustIconPath',
      function (hathiTrust, hathiTrustIconPath) {
        var self = this;
        self.hathiTrustIconPath = hathiTrustIconPath;

        self.$onInit = function () {
          setDefaults();
          if (!(isOnline() && self.hideOnline)) {
            updateHathiTrustAvailability();
          }
        };

        var setDefaults = function setDefaults() {
          if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
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

        var updateHathiTrustAvailability =
          function updateHathiTrustAvailability() {
            var hathiTrustIds = (
              self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid ||
              []
            ).map(function (id) {
              return 'oclc:' + id;
            });
            hathiTrust.findFullViewRecord(hathiTrustIds).then(function (res) {
              self.fullTextLink = res;
            });
          };
      },
    ])
    .component('hathiTrustAvailabilityStudio', {
      require: {
        prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine',
      },
      bindings: {
        hideOnline: '<',
        msg: '@?',
      },
      controller: 'hathiTrustAvailabilityStudioController',
      template:
        '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                <md-icon md-svg-src="{{$ctrl.hathiTrustIconPath}}" alt="HathiTrust Logo"></md-icon>\
                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                {{ ::$ctrl.msg }}\
                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                </a>\
              </span>',
    });

  app.requires.push('hathiTrustAvailability');

  //Auto generated code by primo app store DO NOT DELETE!!! -END-
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

function addFindingAidLink() {
  console.log('add finding aid link!');
  var collectionInfo = document.querySelector('div.collection-info p');
  if (collectionInfo.innerText.search('http://') !== -1) {
    var oldLinkText = collectionInfo.innerText.substring(
      collectionInfo.innerText.search('http://')
    );
    var newLinkHTML =
      '<a id="findingAidLink" style="color: white; text-decoration: underline;" href="' +
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

// Instantiate variables that will be reset repeatedly in the listener function
var max = 0;
var winHeight = 0;
var scrollTop = 0;
var foot = 0;
// and let's have a small buffer before the footerWrapper
var buffer = 50;

window.addEventListener('scroll', function(e) {
  // Total length of document
  max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
                     document.body.offsetHeight, document.documentElement.offsetHeight,
                     document.body.clientHeight, document.documentElement.clientHeight);
  // Height of window
  winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
  // Point of the top of the document visible on screen
  scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  // Height of footer
  foot = Math.round(parseFloat(window.getComputedStyle(document.getElementById('footerWrapper')).height));
  // check where we are in terms of scrolling and the footer
  if (document.querySelectorAll('.primo-scrollbar.is-stuck')[0]) {
    if (scrollTop + winHeight >= max - foot) {
      document.querySelectorAll('.primo-scrollbar.is-stuck')[0].style.maxHeight = 'calc(100% - ' + Math.abs(max - winHeight - scrollTop - foot - buffer)  + 'px)'
    } else {
      document.querySelectorAll('.primo-scrollbar.is-stuck')[0].style.maxHeight = 'calc(100% - 2em)'
    }
  }
});