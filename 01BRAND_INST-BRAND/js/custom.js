(function () {

  
  
  'use strict';

  var app = angular.module('viewCustom', [
    'angularLoad',
    'hathiTrustAvailability',
    'availabilityCounts',
    'badgesModal',
    'externalSearch',
	'advancedSearchChevron',
    'customActions'
  ]);


  var nonhathiTrustMember = false;


  

  /*----------below is the code for libchat-----------*/
  // Adds the chat button
  (function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src =
      ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'answers.library.brandeis.edu/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61';
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

  //Google Tag Manager
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-T489X88');

   //Google Analytics 4
   var googleAnalyticsUrl = document.createElement('script');
   googleAnalyticsUrl.src = "https://www.googletagmanager.com/gtag/js?id=G-SBKFHHD1QW";
   googleAnalyticsUrl.type = 'text/javascript';
   googleAnalyticsUrl.async = true;
   document.head.appendChild(googleAnalyticsUrl);
   var googleAnalyticsCode = document.createElement('script');
   googleAnalyticsCode.innerHTML = `window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-SBKFHHD1QW');`;
   document.head.appendChild(googleAnalyticsCode);   

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

  app.component('prmBriefResultAfter', {
		bindings: { parentCtrl: '<' },
		controller: 'prmBriefResultAfterController',
		template: ''
	});
	app.controller('prmBriefResultAfterController', [function () {
		this.$onInit = function () {
			changeArchiveAvailabilityLine(this);
		};
	}]);

  app.component('prmExploreFooterAfter', {
    bindings: { parentCtrl: '<' },

    template:
     '<div id="footerWrapper"><md-content layout=row layout-xs=column><div flex=33 layout=column><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Find More</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=http://lts.brandeis.edu/research/archives-speccoll/ >University Archives and Special Collections</a></li><li><a href=https://scholarworks.brandeis.edu>Brandeis ScholarWorks</a></li><li><a href=/discovery/npsearch?vid=01BRAND_INST:BRAND>Newspaper Search</a></li><li><a href=https://search.worldcat.org/ >WorldCat (Search Libraries Worldwide)</a></li><li><a href=http://www.brandeis.edu/library/research/books-articles/database-trials.html>Database Trials</a></li></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Library Services</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=https://www.brandeis.edu/library/about/hours/index.html>Library Hours</a></li><li><a href=https://www.brandeis.edu/library/borrowing/index.html>Borrowing</a></li><li><a href=https://www.brandeis.edu/library/about/services/accessibility.html>Accessibility</a></li><li><a href=https://www.brandeis.edu/library/borrowing/document-delivery.html target=_blank>Interlibrary Loan and Scan on Demand </a></li><li><a href="https://www.brandeis.edu/library/research/books-articles/purchase-request.html">Suggest a Library Purchase</a></li></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Get Help</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=https://guides.library.brandeis.edu/eresources>E-Resource Help</a></li><li><a href=https://www.brandeis.edu/library/research/help/index.html>Research Help</a></li><li><a href=https://guides.library.brandeis.edu/more_guides/citing_sources>Citing Sources</li><li><a href=https://guides.library.brandeis.edu/ >Research Guides</a></li><li><a href="https://www.brandeis.edu/library/research/books-articles/onesearch-faq.html">OneSearch FAQ</a></li><li><a href="http://answers.library.brandeis.edu/systems">System Status</a></li></md-card-content></div></md-content></div>',
  });

  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    template:

      '<hathi-trust-availability  ignore-copyright="false" hide-online="true" entity-id="https://shibboleth.brandeis.edu/idp/shibboleth" >',

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

  app.component('prmActionContainerAfter', {
    controller: 'prmActionContainerAfterController',
  });

  app.component('prmSearchBarAfter', {
  controller: function($scope) {
    this.$onInit = function() {
        $scope.$parent.$ctrl.showTabsAndScopes = true;
    }
  }
});
    
  //Library banner alert message!!

  /*
  app.component('prmBackToLibrarySearchButtonAfter', {
    template: '<div style="background-color: #ffc107; width: 100%; text-align: center; padding: 10px; border-radius: 5px; margin-bottom: 15px;">There is currently an issue with interlibrary loan article / chapter access.  Please contact <a href="mailto:ill@brandeis.edu">ill@brandeis.edu</a> if you need immediate help accessing your requested article or chapter.</div>',
  });*/

  

  app.component('prmBlankIllAfter', {
    controller: 'prmBlankIllAfterCtrl',
  });

  app.component('prmLoanAfter', {
    controller: 'prmLoanAfterController',
  });

  app.component('prmRequestsAfter', {
    controller: 'prmRequestsAfterController',
  });

  app.component('prmServiceNgrsAfter', {
    template:'<div id="rapidoOneSearchLinkFullDisplay"><a class="md-button md-primoExplore-theme md-ink-ripple get_it_btn" href="https://www.brandeis.edu/library/borrowing/ill/index.html" style="padding-left: 6px; padding-right: 6px; color: white; background-color: #3d6e94; border-radius: 5px;"">Learn More About Interlibrary Loan and Scan on Demand</a></div><a id="rapidoBlankFormLink" style="display: none;"></a>',
    controller: 'prmServiceNgrsAfterController'
  });

  /*
  app.component('prmServiceDetailsAfter', {
    controller: 'prmServiceDetailsAfterController',
  });*/

  app.component('prmLocationItemsAfter', {
    controller: 'prmLocationItemsAfterController',
  });

 /* app.component('prmFacetExactAfter', {
    template: '<availability-counts></availability-counts>'
  });*/

  // Update links in template line below to direct to your Primo server and WorldCat, etc.
  app.component('prmNoSearchResultAfter',{
    bindings: {parentCtrl: '<'},
    controller: 'prmNoSearchResultAfterController',
    template: '<div> <md-card class="default-card zero-margin _md md-primoExplore-theme"> <md-card-title> <md-card-title-text> <span class="md-headline ng-scope">No results found</span> </md-card-title-text> </md-card-title> <md-card-content> <p> <span>There are no results matching your search:<blockquote> <i>{{$ctrl.getSearchTerm()}}</i>. </blockquote> <div ng-if="$ctrl.pciSetting !== true" style="margin-bottom: 10px;"> <a href="https://search.library.brandeis.edu/discovery/search?query=any,contains,{{$ctrl.getSearchTerm()}}&tab=CentralIndex&search_scope=CentralIndex&vid=01BRAND_INST:BRAND&offset=0&sortby=rank"> <b>Try this search again for items that you can request from other libraries through Interlibrary Loan</b> </a> </div> </p> <p> <span class="bold-text ng-scope">Suggestions:</span> </p> <ul> <li class="ng-scope">Make sure that all words are spelled correctly.</li> <li class="ng-scope">Try fewer or more general search terms.</li><li>Looking for a newspaper article? Try the <a href="https://search.library.brandeis.edu/discovery/npsearch?vid=01BRAND_INST:BRAND&query=any,contains,{{$ctrl.getSearchTerm()}}">newspaper search</a>.</li> <li class="ng-scope">Follow these <a href="https://guides.library.brandeis.edu/searchbasics">Tips for searching Library resources</a>.</li> <li class="ng-scope"><a onclick="document.getElementById(\'lcs_slide_out_button-9616\').click()">Ask a librarian</a>.</li> </ul> </md-card-content></md-card></div>'
  });

  app.component('prmSearchBookmarkFilterAfter', {  
    template: `
      <help-menu-topbar>
 
          <a class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple"
                    aria-label="Open Search Help Menu" target="_blank"
                    href="https://www.brandeis.edu/library/research/books-articles/onesearch-faq.html" title="OneSearch help menu (opens in new tab)">
            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_help_24px"></prm-icon>
          </a>

        <span class="notification-indicator"></span>
      </help-menu-topbar>`
  });


  app.component('prmIconAfter', {template:'<badges-modal></badges-modal><fav-overlay></fav-overlay><search-chevron></search-chevron>'});

  app.component('prmTabsAndScopesSelectorAfter',{	
    bindings: {parentCtrl: '<'},	
    controller: function($scope){	
      setTimeout(function() {	
        function activateSearch(){	
          setTimeout(function(){	
            document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click()	
          }, 500)	
        }	
        var searchScopes = document.querySelectorAll('div.simple-search-wrapper [id^="select_option_"]');	
        for (let i = 0; i < searchScopes.length; i++) {	
          searchScopes[i].onclick = function(){	
            activateSearch();	
          };	
        }	
      var subScopes = document.querySelectorAll('div.simple-search-wrapper #select_value_label_16 span[role="button"]');
      for (let i = 0; i < subScopes.length; i++) {	
          subScopes[i].onclick = function(){	
            activateSearch();	
          };	
        }	

      }, 500)	
    }	
  });
    
    // Enhance No Results tile
    app.controller('prmNoSearchResultAfterController', [function () {
	var vm = this;

    // Changed for upgrade from Angular 1.6 to 1.8 - JPH 10/11/22
    vm.$onInit = function () {
      vm.getSearchTerm = getSearchTerm;
      vm.query = vm.parentCtrl.searchStateService.searchObject.query || '';
      vm.searchScope = vm.parentCtrl.searchStateService.searchObject.scope || '';
      vm.pciSetting = vm.parentCtrl.searchStateService.searchObject.pcAvailability || '';

      function getSearchTerm() {
         return vm.parentCtrl.term;
       }
    }
	}]);

  app.controller('prmLocationItemsAfterController', [
    function () {
      var checkIfFilterButtonLoaded = setInterval(function(){
        var filterButton = document.querySelector('prm-location-items button[aria-label="Filter"]')
        //Without checking for whether the filter icon has been toggled, this customization will toggle and then untoggle the filter options -- I don't know why.  Probably could be avoided by doing this outside of the component
        var filterIcon = document.querySelector('prm-location-items md-icon[md-svg-icon="primo-ui:filter"');
        if ((filterButton) && (filterIcon)){
          document.querySelector('prm-location-items button[aria-label="Filter"]').click();
          clearInterval(checkIfFilterButtonLoaded);
        }

      //Remove dates on work orders 
      var itemStatuses = document.querySelectorAll('span.item-status')
      for (var i = 0; i < itemStatuses.length; i++){
          var itemStatus = itemStatuses[i].innerHTML;

        
          var yearRegex = /In process of Preservation (until \d\d\/\d\d\/\d\d\d\d)/
          var regexResult = itemStatus.match(yearRegex);
          if (regexResult !== null){
              if (regexResult.length == 2){
                  itemStatuses[i].innerHTML = itemStatuses[i].innerHTML.replace(regexResult[1], '');
                  //itemStatuses[i].innerHTML = 'oshkosh';
              }
          }    
      }      

        
      }, 500);
    },
  ]);

   app.controller('prmBlankIllAfterCtrl', [
    function () {
      blankILLAfter();
    },
  ]);

  app.controller('prmActionContainerAfterController', ['$scope', function($scope){

		this.$onInit = function(){
			var parentCtrl = $scope.$parent.$ctrl
			console.log("ParentCtrl!");
            console.log(parentCtrl);
			console.log("actionName is " + parentCtrl.actionName);
			$scope.$watch(function(){return parentCtrl.actionName}, function(){
				console.log("watch fires!");
				
				var sendToEmailNotificationElement = document.createElement('div');
				sendToEmailNotificationElement.id = 'sendToEmailNotice';
				sendToEmailNotificationElement.innerHTML  = '<div id="sendToEmailNotice" style="background-color: #F7EDA3; width: 100%; text-align: center; padding: 10px; border-radius: 5px; margin-top: 5px; margin-bottom: 5px;">Use Report Broken Link or Ask / Chat with a Librarian to ask a question about a OneSearch record.</div>'
				if (parentCtrl.actionName == "E-mail"){
					
					setTimeout(function(){
						var subjectElement = document.querySelector('div[name="subject"]');
						subjectElement.insertAdjacentElement("afterend", sendToEmailNotificationElement)
					}, 1000);
				}
			}, true);

		}
	}
	]);

  app.controller('prmServiceNgrsAfterController', ['$scope', function($scope){
    //console.log("service ngrs");
    //console.log($scope.$parent)
    //console.log("Ebook offer");
    //console.log($scope.$parent.$ctrl._bestOffer.ebookOffer);
    $scope.$watch(function(){return $scope.$parent.$ctrl._bestOffer.ebookOffer}, function(){  
        var RapidoServicesArray = $scope.$parent.$ctrl.rapidoServices;
      for (var i = 0; i < RapidoServicesArray.length; i++){
        var currentRapidoService = RapidoServicesArray[i];
        if (currentRapidoService.serviceType == "RapidoEbookTile"){
          if (!currentRapidoService.noKnownTerms){
                 const rapidoBlankFormLink = document.getElementById('rapidoBlankFormLink');
              rapidoBlankFormLink.classList.add('md-button', 'md-primoExplore-theme', 'md-ink-ripple', 'get_it_btn');
              rapidoBlankFormLink.href = 'https://search.library.brandeis.edu/discovery/blankIll?vid=01BRAND_INST:BRAND';
              rapidoBlankFormLink.style.paddingLeft = '6px';
              rapidoBlankFormLink.style.paddingRight = '6px';
              rapidoBlankFormLink.style.color = 'white';
              rapidoBlankFormLink.style.backgroundColor = '#3d6e94';
              rapidoBlankFormLink.style.borderRadius = '5px';
              rapidoBlankFormLink.innerText = 'Request a Physical Book with the Blank Form';
            
              // Toggle display from none to block
              rapidoBlankFormLink.style.display = 'inline-block'; // Or 'inline-block' if you prefer
          }	
        }
      }
        
    });
    toggleInterlibraryLoanFAQButton();
    }
    ]);



  /*
  app.controller('prmServiceDetailsAfterController', ['$scope',
    function ($scope) {

      var subjectValues = $scope.$parent.$ctrl["item"]["pnx"]["display"]["subject"]
      console.log("subjectValues are")
      console.log(subjectValues);
      
    if (subjectValues){
       for (var i = 0; i < subjectValues.length; i++){
         var metadataKeys = Object.keys(metadataSubstitutions)
         for (var j = 0; j < metadataKeys.length; j++){
           var metadataKey = metadataKeys[j];
           subjectValues[i] = subjectValues[i].replace(metadataKey, metadataSubstitutions[metadataKey])
         }
       }
       $scope.$parent.$ctrl["item"]["pnx"]["display"]["subject"].sort();
    }
   
    
    }
  ]);*/

  app.controller('prmLoanAfterController', ['angularLoad', '$scope',
    function (angularLoad, $scope) {

      var item = $scope.$parent.$ctrl.item;
      item.callnumber = "";
      item.mainlocationname = "Main Library"
      item.secondarylocationname = "";
      //console.log(item);
      
      this.$doCheck = function(){  
        //console.log("start!");
        var item = $scope.$parent.$ctrl.item;
        //console.log(item);
        
      }
    },
  ]);

 app.controller('prmRequestsAfterController', ['angularLoad', '$scope',
    function (angularLoad, $scope) {
      //var $ctrl = $scope.$parent.$ctrl
     // console.log($ctrl);
    },
  ]);

  //This is also being used for correcting facet values
  app.controller('FacetToTopController', function($scope) {
    this.$onInit = function(){

      //Facet to top functionality
       var facetGroup = $scope.$parent.$parent.$ctrl.facetGroup;
        function moveToTop(topFacets)
        {
            var topFacetObjects = [];
            angular.forEach(facetGroup.values, function(facet, index) {
                if(topFacets.indexOf(facet.value) != -1)
                {
                    topFacetObjects.push(facet);
                }
            });
            topFacetObjects.reverse();
            topFacetObjects.forEach( function(facet, index) {
                facetGroup.values.sort(function(x,y){ return x == facet ? -1 : y == facet ? 1 : 0; });
            });
        }
        if(facetGroup.name == "rtype")
        {
            var topFacets = [ "books" ];
            moveToTop(topFacets);
          
        }
    };
});


   app.controller('prmBlankIllAfterCtrl', [
    function () {
      blankILLAfter();
    },
  ]);

 //Custom actions
  app.component('prmActionListAfter', {
  template: `<custom-action name="broken_link"
    label="Report Broken Link"
    index=9
    icon="ic_report_24px"
    icon-set="content"
    link= "{{vm.link}}" ></custom-action><custom-action name="ask_a_librarian"
  `,
  controller: function($scope){
      var vm = this;
      var docID = getUrlParameter("docid");
      vm.link = 'https://answers.library.brandeis.edu/problemreport?recordID=' + docID;
  },
    controllerAs: 'vm'
})

  app.component('prmAdvancedSearchAfter', {
    template: '<p style="border-radius: 10px; padding: 10px; background-color: #F7EDA3;"><strong>Just want to browse?</strong> Enter a ? into the search box and then select a language, material type, or publication year from the dropdown menus.</p>'
  });


   app.component('prmAtozSearchBarAfter', {
    template: '<div id="backToCatalog" style=""><prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="back-to-search"></prm-icon><a href="/">Back to Catalog</a></div>'
  });

   app.component('prmNewspapersSearchBarAfter', {
    template: '<div id="backToCatalog" style=""><prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="back-to-search"></prm-icon><a href="/">Back to Catalog</a></div>'
  });

   

  //Values for external search  
app.value('searchTargets', [{
    "name": "Worldcat",
    "url": "https://search.worldcat.org/search?",
    "img": "https://search.library.brandeis.edu/discovery/custom/01BRAND_INST-BRAND/img/worldcat-logo.png",
    "alt": "Worldcat Logo",
    mapping: function (queries, filters) {
      const query_mappings = {
        'any': 'kw',
        'title': 'ti',
        'creator': 'au',
        'sub': 'su',
        'isbn': 'bn',
        'issn': 'n2'
      }
      try {
        return 'q=' + queries.map(part => {
          let terms = part.split(',')
          let type = query_mappings[terms[0]] || 'kw'
          let string = terms[2] || ''
          let join = terms[3] || ''
          return type + ':' + string + ' ' + join + ' '
        }).join('')
      }
      catch (e) {
        return ''
      }
    }
  },
  
  {
    "name": "Google Scholar",
    "url": "https://scholar.google.com/scholar?q=",
    "img": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Google-g-icon.png",
    "alt": "Google Scholar Logo",
    mapping: function (queries, filters) {
      try {
        return queries.map(part => part.split(",")[2] || "").join(' ')
      }
      catch (e) {
        return ''
      }
    }
  },
 {
    "name": "ArchiveGrid",
    "url": "https://researchworks.oclc.org/archivegrid/?q=",
    "img": "https://search.library.brandeis.edu/discovery/custom/01BRAND_INST-BRAND/img/archivegrid_logo_home.png",
    "alt": "ArchiveGrid Logo",
    mapping: function (queries, filters) {
      try {
        return queries.map(part => part.split(",")[2] || "").join(' ')
      }
      catch (e) {
        return ''
      }
    }
  },
  {
    "name": "HathiTrust",
    "url": "https://babel.hathitrust.org/cgi/ls?q1=",
    "img": "https://search.library.brandeis.edu/discovery/custom/01BRAND_INST-BRAND/img/HathiTrustIcon.PNG",
    "alt": "HathiTrust Logo",
    mapping: function (queries, filters) {
      try {
        var initialQuery = queries.map(part => part.split(",")[2] || "").join(' ') 
        var restOfQuery = "&field1=ocr&a=srchls&ft=ft&lmt=ft"
        return initialQuery + restOfQuery;
      }
      catch (e) {
        return ''
      }
    }
  },
                             {
    "name": "Internet Archive",
    "url": "https://archive.org/search.php?query=",
    "img": "https://search.library.brandeis.edu/discovery/custom/01BRAND_INST-BRAND/img/internet-archive-icon-filled.png",
    "alt": "Internet Archive Logo",
    mapping: function (queries, filters) {
      try {
        return queries.map(part => part.split(",")[2] || "").join(' ')
      }
      catch (e) {
        return ''
      }
    }
  }
])


 
angular
  .module('externalSearch', [])
  .value('searchTargets', [])
  .component('prmFacetAfter', {
      bindings: { parentCtrl: '<' },
      controller: ['externalSearch', function (externalSearch) {
        this.$onInit = function () {
          externalSearch.setController(this.parentCtrl)
          externalSearch.addExtSearch()
        }
      }]
  })
  .component('prmPageNavMenuAfter', {
    controller: ['externalSearch', function (externalSearch) {
      this.$onInit = function () {
        if (externalSearch.getController()) externalSearch.addExtSearch()
      }
    }]
  })
  .component('prmFacetExactAfter', {
      bindings: { parentCtrl: '<' },
      template: '<div ng-if="name === \'External Search\'">\
          <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">\
              <div class="section-content animate-max-height-variable">\
                  <div class="md-chips md-chips-wrap">\
                      <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\
                          <div class="md-chip-content layout-row" role="button" tabindex="0">\
                              <strong dir="auto" title="{{ target.name }}">\
                                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">\
                                      <img ng-src="{{ target.img }}" width="22" height="22" alt="{{ target.alt }}" style="vertical-align:middle;"> {{ target.name }}\
                                  </a>\
                              </strong>\
                          </div>\
                      </div>\
                  </div>\
              </div>\
          </div>\
      </div><availability-counts></availability-counts><span ng-controller="FacetToTopController"></span>',
      controller: ['$scope', '$location', 'searchTargets', function ($scope, $location, searchTargets) {
        this.$onInit = function () {
          $scope.name = this.parentCtrl.facetGroup.name
          $scope.targets = searchTargets
          var query = $location.search().query
          var filter = $location.search().pfilter
          $scope.queries = Object.prototype.toString.call(query) === '[object Array]' ? query : query ? [query] : false
          $scope.filters = Object.prototype.toString.call(filter) === '[object Array]' ? filter : filter ? [filter] : false
        }
      }]
  })
  .factory('externalSearch', function () {
    return {
      getController: function () {
        return this.prmFacetCtrl || false
      },
      setController: function (controller) {
        this.prmFacetCtrl = controller
      },
      addExtSearch: function addExtSearch() {
        var xx=this;
        var checkExist = setInterval(function() {

           var facetsLength = xx.prmFacetCtrl.facetService.results.length;   
           if (xx.prmFacetCtrl.facetService.results[facetsLength - 1] && xx.prmFacetCtrl.facetService.results[facetsLength - 1].name !="External Search") {
              if (xx.prmFacetCtrl.facetService.results.name !== 'External Search') {
                xx.prmFacetCtrl.facetService.results.push({
                  name: 'External Search',
                  displayedType: 'exact',
                  limitCount: 0,
                  facetGroupCollapsed: true,
                  values: undefined
                });
              }
              clearInterval(checkExist);
           }
        }, 100);

      }
    }
  })

  

  //Auto generated code by primo app store DO NOT DELETE!!! -END-

  //Auto generated code by primo app store DO NOT DELETE!!! -START-

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

      var lookup = function (ids) {
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
            for (var i = 0; i < ids.length; i++) {
              var recordId = Object.keys(bibData[ids[i]].records)[0];
              if (recordId) {
                return $q.resolve(bibData[ids[i]].records[recordId].recordURL);
              }
            }
            return $q.resolve(null);
          })
          .catch(function (e) {
            console.error(e);
          });
      };

      // find a public-domain HT record URL for a given list of identifiers
      svc.findFullViewRecord = function (ids) {
        var handleResponse = function (bibData) {
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
            console.error(e);
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
        if (!self.msg) self.msg = 'Full Text Available at HathiTrust';

        // prevent appearance/request iff 'hide-online'
        if (self.hideOnline && isOnline()) {
          return;
        }

        // prevent appearance/request iff 'hide-if-journal'
        if (self.hideIfJournal && isJournal()) {
          return;
        }

    	// prevent appearance/request if item is unavailable
    	if (self.ignoreCopyright && !isAvailable()) {
    	   //allow links for locally unavailable items that are in the public domain
           self.ignoreCopyright=false;
        }

        // look for full text at HathiTrust
        updateHathiTrustAvailability();
      };

      var isJournal = function () {
        var format =
          self.prmSearchResultAvailabilityLine.result.pnx.addata.format[0];
        return !(format.toLowerCase().indexOf('journal') == -1); // format.includes("Journal")
      };

      var isAvailable = function isAvailable() {
	var available = self.prmSearchResultAvailabilityLine.result.delivery.availability[0];
	return (available.toLowerCase().indexOf('unavailable') == -1); 
      };

      var isOnline = function () {
        var delivery =
          self.prmSearchResultAvailabilityLine.result.delivery || [];
        if (!delivery.GetIt1)
          return delivery.deliveryCategory.indexOf('Alma-E') !== -1;
        return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(
          function (g) {
            return g.links.some(function (l) {
              return l.isLinktoOnline;
            });
          }
        );
      };

      var formatLink = function (link) {
        return self.entityId ? link + '?signon=swle:' + self.entityId : link;
      };

      var isOclcNum = function (value) {
        return value.match(/^(\(ocolc\))?\d+$/i);
      };

      var updateHathiTrustAvailability = function () {
        var hathiTrustIds = (
          self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []
        )
          .filter(isOclcNum)
          .map(function (id) {
            return 'oclc:' + id.toLowerCase().replace('(ocolc)', '');
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
      hideIfJournal: '<',
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
})();

/* Custom action Begins */
  angular.module('customActions', []);

  /* eslint-disable max-len */
  angular
    .module('customActions')
    .component('customAction', {
      bindings: {
        name: '@',
        label: '@',
        icon: '@',
        iconSet: '@',
        link: '@',
        target: '@',
        index: '<'
      },
      require: {
        prmActionCtrl: '^prmActionList'
      },
      controller: ['customActions', function (customActions) {
        var _this = this;

        this.$onInit = function () {
          _this.action = {
            name: _this.name,
            label: _this.label,
            index: _this.index,
            icon: {
              icon: _this.icon,
              iconSet: _this.iconSet,
              type: 'svg'
            },
            onToggle: customActions.processLinkTemplate(_this.link, _this.prmActionCtrl.item, _this.target)
          };
          customActions.removeAction(_this.action, _this.prmActionCtrl);
          customActions.addAction(_this.action, _this.prmActionCtrl);
        };
      }]
    });

  /* eslint-disable max-len */
  angular
    .module('customActions')
    .factory('customActions', function () {
      return {
        /**
         * Adds an action to the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        // TODO coerce action.index to be <= requiredActionsList.length
        addAction: function addAction(action, ctrl) {
          if (!this.actionExists(action, ctrl)) {
            this.addActionIcon(action, ctrl);
            ctrl.actionListService.requiredActionsList.splice(action.index, 0, action.name);
            ctrl.actionListService.actionsToIndex[action.name] = action.index;
            ctrl.actionListService.onToggle[action.name] = action.onToggle;
            ctrl.actionListService.actionsToDisplay.unshift(action.name);
          }
        },
        /**
         * Removes an action from the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeAction: function removeAction(action, ctrl) {
          if (this.actionExists(action, ctrl)) {
            this.removeActionIcon(action, ctrl);
            delete ctrl.actionListService.actionsToIndex[action.name];
            delete ctrl.actionListService.onToggle[action.name];
            var i = ctrl.actionListService.actionsToDisplay.indexOf(action.name);
            ctrl.actionListService.actionsToDisplay.splice(i, 1);
            i = ctrl.actionListService.requiredActionsList.indexOf(action.name);
            ctrl.actionListService.requiredActionsList.splice(i, 1);
          }
        },
        /**
         * Registers an action's icon.
         * Called internally by addAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        addActionIcon: function addActionIcon(action, ctrl) {
          ctrl.actionLabelNamesMap[action.name] = action.label;
          ctrl.actionIconNamesMap[action.name] = action.name;
          ctrl.actionIcons[action.name] = action.icon;
        },
        /**
         * Deregisters an action's icon.
         * Called internally by removeAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeActionIcon: function removeActionIcon(action, ctrl) {
          delete ctrl.actionLabelNamesMap[action.name];
          delete ctrl.actionIconNamesMap[action.name];
          delete ctrl.actionIcons[action.name];
        },
        /**
         * Check if an action exists.
         * Returns true if action is part of actionsToIndex.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         * @return {bool}
         */
        actionExists: function actionExists(action, ctrl) {
          return ctrl.actionListService.actionsToIndex.hasOwnProperty(action.name);
        },
        /**
         * Process a link into a function to call when the action is clicked.
         * The function will open the processed link in a new tab.
         * Will replace {pnx.xxx.xxx} expressions with properties from the item.
         * @param  {string}    link    the original link string from the html
         * @param  {object}    item    the item object obtained from the controller
         * @return {function}          function to call when the action is clicked
         */
        processLinkTemplate: function processLinkTemplate(link, item, target) {
          var processedLink = link;
          var pnxProperties = link.match(/\{(pnx\..*?)\}/g) || [];
          pnxProperties.forEach(function (property) {
            var value = property.replace(/[{}]/g, '').split('.').reduce(function (o, i) {
              try {
                var h = /(.*)(\[\d\])/.exec(i);
                if (h instanceof Array) {
                  return o[h[1]][h[2].replace(/[^\d]/g, '')];
                }
                return o[i];
              } catch (e) {
                return '';
              }
            }, item);
            processedLink = processedLink.replace(property, value);
          });
          return function () {
            if (typeof(target) === 'undefined') {
              target = '_blank';
            }
            return window.open(processedLink, target);
          };
        }
      };
    });
  /* Custom action Ends */


// Begin Badges modal module
angular
  .module('badgesModal', [])
  .component('badgesModal', {
    template: '<button class="badgesButton" ng-if="$ctrl.inBadges" ng-keypress="$ctrl.showBadgeInfo($event, $ctrl.view_code, $ctrl.infoFile)" ng-click="$ctrl.showBadgeInfo($event, $ctrl.view_code, $ctrl.infoFile)" class="badgeButton" aria-label="{{$ctrl.ariaLabel}}"><md-tooltip>{{$ctrl.badgeTooltip}}</md-tooltip><md-icon md-svg-icon="{{$ctrl.infoIcon}}"></md-icon></md-button>',
    controller: function ($scope, $mdDialog, $location, badgeOptions) {
      
      // Badge types
      this.badgeTypes = [
        {
          definition: 'peer-reviewed',
          file: 'peer_review.html',
          options: badgeOptions.peer_review
        },
        {
          definition: 'open-access',
          file: 'open_access.html',
          options: badgeOptions.open_access
        }
      ];
      
      // Initialization
      this.$onInit = function () {
        this.view_code = $location.search().vid.replace(':', '-');
        this.infoIcon = badgeOptions.info_icon;
        this.inBadges = false;
        //console.log($scope.$parent.$parent);
        var icon_definition = $scope.$parent.$parent.$ctrl.iconDefinition;
        angular.forEach($scope.$ctrl.badgeTypes, function(badge) {
          if (icon_definition == badge.definition && badge.options.show_icon) {
            $scope.$ctrl.inBadges = true;
            $scope.$ctrl.badgeTooltip = badge.options.tooltip;
            $scope.$ctrl.ariaLabel = badge.options.aria_label;
            $scope.$ctrl.infoFile = badge.file;
          }
        });
      }
      
      // Badge info dialog
      this.showBadgeInfo = function showBadgeInfo($event, view_code, info_file) {
        $mdDialog.show({
          templateUrl: 'custom/' + view_code + '/html/' + info_file,
          controller: badgeDialogController
        });
        function badgeDialogController($scope, $mdDialog) {
          $scope.closeBadgeInfo = function () {
            $mdDialog.hide();
          }
        }
        $event.stopPropagation();
      }
      
    }
  })
  .value('badgeOptions', {
    info_icon: 'primo-ui:help-circle-outline',
    peer_review: {
      show_icon: true,
      tooltip: '',
      aria_label: "What is peer review? "
    },
    open_access: {
      show_icon: true,
      tooltip: '',
      aria_label: "What is peer review? "
    }
  });
  
// END Badges modal module

/*Advaned search chevron label*/

angular
  .module('advancedSearchChevron', [])
  .component('searchChevron', {
    template: '<chevron-label ng-if="$ctrl.showLabel">{{$ctrl.getLabel()}}</chevron-label>',
    controller: function ($scope) {
      this.$onInit = function() {
        this.showLabel = false;
        // Show the label if this icon is chevron-up and if the parent's controller contains the advancedSearch service
        if (angular.isDefined($scope.$parent.$parent)) {
          var icon = $scope.$parent.$parent;
          if ((icon.$ctrl.iconDefinition == 'chevron-up') && (angular.isDefined(icon.$parent.$parent.$ctrl))) {
            var search_ctrl = icon.$parent.$parent.$ctrl;
            this.showLabel = angular.isDefined(search_ctrl.advancedSearchService);
            this.getLabel = function() {
              return (search_ctrl.advancedSearchCollapsed ? 'Show Search Fields' : 'Hide Search Fields');
            }
          }
        }
      }
    }
  });

/* Add count to availability facet */
angular
    .module('availabilityCounts', [])
    .component('availabilityCounts', {
        controller: function ($scope, availabilityCountsOptions) {

            var avail_group = 'tlevel';

            this.$onInit = function () {
                var parent_ctrl = $scope.$parent.$parent.$ctrl;
                this.facet_group = parent_ctrl.facetGroup.name;
                this.facet_results = parent_ctrl.facetService.results;
                if (this.facet_group == avail_group) {
                    this.processFacets();
                }
                // copy options from local package or central package defaults
                this.msg = availabilityCountsOptions.msg;
            }

            this.processFacets = function () {
                var self = this;
                if (!self.msg) self.msg = '* Counts are approximate. Results may differ.';

                angular.forEach(self.facet_results, function (result) {
                    if (result.name == avail_group) {
                        var first_value = result.values[0].value;
                        var interval = setInterval(find_facet, 100);
                        function find_facet() {
                            if (document.querySelector(self.getSelector(first_value))) {

                                // Clear interval
                                clearInterval(interval);

                                // Add availability counts as spans
                                angular.forEach(result.values, function (facet) {
                                    var selector = self.getSelector(facet.value);
                                    if (document.querySelector(selector)) {
                                        var facet_item = document.querySelector(selector);
                                        if (facet_item.querySelector('.facet-counter') == null) {
                                            var facet_text = facet_item.querySelector('.text-number-space');
                                            var span = document.createElement('span');
                                            var count = document.createTextNode(facet.count.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                                            span.setAttribute('class', 'text-italic text-in-brackets text-rtl facet-counter');
                                            span.appendChild(count);
                                            facet_text.after(span);
                                        }
                                    }
                                });

                                // Facets are created and destroyed in the DOM when the group is toggled so watch for clicks
                                var availGroup = document.querySelector(self.getSelector(avail_group));
                                availGroup.addEventListener('click', function () {
                                    self.processFacets();
                                });

                                // Add warning text
                                if (!availGroup.querySelector('.section-content .warning')) {
                                    var warning = document.createElement('span');
                                    var warningText = document.createTextNode(self.msg);
                                    warning.setAttribute('class', 'warning');
                                    warning.appendChild(warningText);
                                    availGroup.querySelector('.section-content').appendChild(warning);
                                }
                            }
                        }
                    }
                });
            }

            this.getSelector = function (value) {
                if (value == avail_group) {
                    return 'div[data-facet-group="' + avail_group + '"]';
                }
                else {
                    return 'div[data-facet-value="' + avail_group + '-' + value + '"]';
                }
            }

        }
    })
    // Set default values for options
    .value('availabilityCountsOptions', {
        msg: ''
    });
  //* End availability counts *//
  
 


/* STACKMAP integration */

(function () {
 
  var a = document.querySelector("head");
  var css1 = document.createElement("link");
  css1.type = "text/css";
  css1.rel = "Stylesheet";
  css1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  css1.crossorigin = "anonymous";
  a.appendChild(css1);

  var css2 = document.createElement("link");
  css2.type = "text/css";
  css2.rel = "Stylesheet";
  css2.href = "https://www.stackmapintegration.com/brandeis-primo2/StackMap.min.css";
  a.appendChild(css2);

  var w = document.createElement("script");
  w.type = "text/javascript"; w.async = true;
  w.src = "https://www.stackmapintegration.com/brandeis-primo2/StackMap.min.js";
  var b = document.body;
  b.appendChild(w);
})();

function addFindingAidLink(){
  console.log("add finding aid link!");
  var collectionInfo = document.querySelector('div.collection-info p');
  if (collectionInfo.innerText.search('http://') !== -1){
      var oldLinkText  = collectionInfo.innerText.substring(collectionInfo.innerText.search('http://'));
      var newLinkHTML = '<a id="findingAidLink" href="' + oldLinkText + '">' + 'Finding aid link' + '</a>';
      //console.log("newLinkHTML");
      //console.log(newLinkHTML);
      collectionInfo.innerHTML = collectionInfo.innerHTML.replace('Finding aid link:', '');
      collectionInfo.innerHTML = collectionInfo.innerHTML.replace(oldLinkText, newLinkHTML);
  }
  if (document.location.search.indexOf('81449890850001921') !== -1){
    collectionInfo.innerHTML = collectionInfo.innerHTML.replace('ScholarWorks', '<a id="findingAidLink" href="https://scholarworks.brandeis.edu">ScholarWorks</a>');
  }
  //Robert D. Farber University Archives and Special Collections
  if (document.location.search.indexOf('81430927000001921') !== -1){
    collectionInfo.innerHTML = collectionInfo.innerHTML.replace('Robert D. Farber University Archives and Special Collections', '<a id="findingAidLink" href="https://www.brandeis.edu/library/archives/index.html">Robert D. Farber University Archives and Special Collections</a>');
  }
  if (document.location.search.indexOf('81475452180001921') !== -1){	
    collectionInfo.innerHTML = collectionInfo.innerHTML.replace('Learn more about this collection', '<a id="findingAidLink" href="https://www.brandeis.edu/library/archives/essays/special-collections/sacco-vanzetti.html">Learn more about this collection</a>');	
  }

}

// Instantiate variables that will be reset repeatedly in the listener function
var max = 0;
var winHeight = 0;
var scrollTop = 0;
var foot = 0;
// and let's have a small buffer before the footerWrapper
var buffer = 50;

window.addEventListener('scroll', function (e) {
  // Total length of document
  max = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  // Height of window
  winHeight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  // Point of the top of the document visible on screen
  scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  // Height of footer
  foot = Math.round(
    parseFloat(
      window.getComputedStyle(document.getElementById('footerWrapper')).height
    )
  );
  // check where we are in terms of scrolling and the footer
  if (document.querySelectorAll('.primo-scrollbar.is-stuck')[0]) {
    if (scrollTop + winHeight >= max - foot) {
      document.querySelectorAll(
        '.primo-scrollbar.is-stuck'
      )[0].style.maxHeight =
        'calc(100% - ' +
        Math.abs(max - winHeight - scrollTop - foot - buffer) +
        'px)';
    } else {
      document.querySelectorAll(
        '.primo-scrollbar.is-stuck'
      )[0].style.maxHeight = 'calc(100% - 2em)';
    }
  }
});

function blankILLAfter(){
  
  if (document.querySelector('form h3') !== null){
    var currentHTML = document.querySelector('form h3').outerHTML;
    var newHTML = currentHTML + '</h3><div id="illFormMessage" style="background-color: #ffffcc; border-radius: 10px; width: 100%; font-size: 75%; padding: 10px; border-radius: 5px; margin-bottom: 15px; border-radius: 5px; border-color: lightgray; border-width: 1px; border-style: solid;"><ul><li>For more information on placing requests, go to the <a href="https://www.brandeis.edu/library/borrowing/ill/faq.html">Interlibrary Loan & Scan on Demand FAQ.</a></li><li>Check the status of your request in your <a href="https://search.library.brandeis.edu/discovery/account?vid=01BRAND_INST:BRAND&section=requests&lang=en">OneSearch Account.</a></li><li>Use the "Notes" field to add any extra details that may help us identify or locate your item.</li><li>Email <a href="mailto:ill@brandeis.edu">ill@brandeis.edu</a> with any questions.</li></ul><p><span style="font-weight: 400">Note:</span>  To put materials on course reserve for your class, please use the <a href="https://www.brandeis.edu/library/teaching/reserves/index.html">Course Reserve Request form.</a></p></div>';
    document.querySelector('form h3').innerHTML = newHTML;
  }
  else {
    setTimeout(blankILLAfter, 500);
  }
}

function toggleInterlibraryLoanFAQButton(){
   if (document.querySelector('prm-rapido-no-offer-message') !== null){
    document.getElementById('rapidoOneSearchLinkFullDisplay').setAttribute('style', 'display: none;');
  }
  else if (document.querySelector('span[translate="nui.ngrs.physical.getitbtn"]') !== null){
    document.getElementById('rapidoOneSearchLinkFullDisplay').setAttribute('style', 'display: block;');
  }
  else {
    setTimeout(toggleInterlibraryLoanFAQButton, 500);
  }
}

function toSentenceCase(str){
  var stringArray = str.split(' ');
  for (i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].charAt(0).toLowerCase() + stringArray[i].substring(1);
  }
  stringArray[0] = stringArray[0].charAt(0).toUpperCase() + stringArray[0].substring(1);
  return stringArray.join(' '); 
}

 metadataSubstitutions = {
   "Alien property": "Foreign-owned property",
   "Tulsa Race Riot": "Tulsa Race Massacre",
   "African American universities and colleges": "Historically Black Colleges and Universities (HBCUs)",
   "Asian flu": "1957–1958 influenza pandemic",
   "Bildungsromans": "Coming of age--Fiction",
   "Boat people": "Political refugees",
   "Child pornography": "Child sexual abuse material",
   "Children of sperm donors": "Donor offspring",
   "Defloration": "Loss of virginity",
   "Gays": "Gay people",
   "Gender-nonconforming people": "Non-binary people",
   "God (Islam)": "Allah",
   "Illegitimacy": "Nonmarital births",
   "Illegitimate children": "Children of unmarried parents",
   "Indians of North America": "Indigenous peoples of North America",
   "Juvenile delinquents": "Youth in custody",
   "Leprosy": "Hansen's disease",
   "Manic-depressive illness": "Bipolar disorder",
   "Oriental literature": "Asian literature",
   "Problem children": "Children with behavioral problems",
   "Racially mixed people": "Multiracial people",
   "Schizophrenics": "People with schizophrenia",
   "Sexual reorientation programs": "Sexual conversion programs",
   "Sexual minorities": "LGBTQ+ people" 
 }

function radioButtons() {
    var checkForForm = window.location.href;
    
    if (window.location.href.search('discovery/blankIll') !== -1) {
        const elem = document.getElementsByTagName("md-radio-button")[2];
        for (const a of elem.attributes) {
            if (a.name == 'aria-checked') {
                var checkTrue = a.value;
                if (checkTrue == 'true') {
                    document.getElementById('form_field_pickupLocation').style.display = 'block';
                } else {
                    document.getElementById('form_field_pickupLocation').style.display = 'none';
                }
            }
        }
        document.getElementsByTagName("md-radio-button")[2].addEventListener('click', function(event) {
            const elem = document.getElementsByTagName("md-radio-button")[2];
            for (const a of elem.attributes) {
                if (a.name == 'aria-checked') {
                    var checkTrue = a.value;
                    if (checkTrue == 'true') {
                        document.getElementById('form_field_pickupLocation').style.display = 'none';
                    } else {
                        document.getElementById('form_field_pickupLocation').style.display = 'block';
                    }
                }
            }
        });
        document.getElementsByTagName("md-radio-button")[3].addEventListener('click', function(event) {
            const elem = document.getElementsByTagName("md-radio-button")[3];
            for (const a of elem.attributes) {
                if (a.name == 'aria-checked') {
                    var checkTrue = a.value;
                    if (checkTrue == 'true') {
                        document.getElementById('form_field_pickupLocation').style.display = 'block';
                    } else {
                        document.getElementById('form_field_pickupLocation').style.display = 'none';
                    }
                }
            }
        });
        document.getElementsByTagName("md-radio-button")[4].addEventListener('click', function(event) {
            const elem = document.getElementsByTagName("md-radio-button")[3];
            for (const a of elem.attributes) {
                if (a.name == 'aria-checked') {
                    var checkTrue = a.value;
                    if (checkTrue == 'true') {
                        document.getElementById('form_field_pickupLocation').style.display = 'none';
                    } else {
                        document.getElementById('form_field_pickupLocation').style.display = 'block';
                    }
                }
            }
        });
    }
}
window.setInterval(function() {
    radioButtons();
    enableNewspaperButton();
}, 500);

function changeArchiveAvailabilityLine(vm) {
	var sourceid = vm.parentCtrl.item.pnx.control.originalsourceid[0]; // Use this to check if an archival collection
	var almaid = vm.parentCtrl.item.pnx.control.recordid[0];
	if (sourceid.search('oai:brandeis//repositories/2') !== -1){
		// Need to build in a delay so that elements are fully formed.
		// Can't send the interval id (myInterval) as part of the setInterval function - not sure why...
		// but adding a timeOut that runs straight away and including it in that works perfectly.
		var myInterval = setInterval(function () {
			setTimeout(editAvailabilityText, 0, almaid, myInterval);
		}, 200); // Need to build in a delay so that elements are fully formed.
	}
	function editAvailabilityText(almaid, myInterval) {
		var span_array = document.getElementsByClassName('button-content');
		for (var i = 0; i < span_array.length; i++) {
			var span_id = span_array[i].getAttribute('id');
			if (span_id !== null) {
				if (span_id.substring(0, almaid.length) == almaid) {
					var ava = span_array[i].getElementsByClassName('availability-status')[0];
					ava.setAttribute('class', 'availability-status available_in_library'); // This changes the colour; anything else?
					ava.textContent = "Online access to finding aid only; contact archives@brandeis.edu to see physical items";
					clearInterval(myInterval);
				}
			}
		}
	}
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


function enableNewspaperButton() {
  //It should never actually be null on the results page, but might as well be sure
  if (document.getElementsByTagName('prm-ngrs-results-button') !== null) {
      var querystring = location.search;
      //If the user has faceted to newspaper articles
      if (querystring.search('newspaper_articles') !== -1) {
          if (document.getElementById('newspaperButton') == null){
              var ngrsButton = document.getElementsByTagName('prm-ngrs-results-button')[0];
              var newspaperNode = document.createElement("div");
              newspaperNode.setAttribute("id", "newspaperButtonContainer");

              //Default value
              var linkHref = "https://search.library.brandeis.edu/discovery/npsearch?vid=01BRAND_INST:BRAND"

              //getUrlParameter is defined above, since there's no native JS function
              var searchTermString = getUrlParameter('query')
              if (searchTermString) {
                  //I'm not capturing situations where the user has searched for multiple terms -- I may add this in later
                   if (searchTermString.split(',').length == 3){
                       var queryTerm = searchTermString.split(',')[2];
                       var linkHref = "https://search.library.brandeis.edu/discovery/npsearch?vid=01BRAND_INST:BRAND&query=any,contains," + encodeURIComponent(queryTerm);
                   }
              }
             
              var linkHTML = '<strong> Below is a small sample of our newspaper articles. </strong> For a more comprehensive search, <a id="newspaperButton" href="' + linkHref + '">try our dedicated newspaper search tool!</a>';
              newspaperNode.innerHTML = '<md-card class="default-card padded-container-medium zero-margin _md md-primoExplore-theme"><p class="zero-margin"><svg style="top: 7px; position: relative;" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="News__x26__Events_1_"><path d="M5.5,28C4.122,28,3,26.879,3,25.5v-14C3,11.224,3.224,11,3.5,11h2C5.776,11,6,11.224,6,11.5   S5.776,12,5.5,12H4v13.5C4,26.327,4.673,27,5.5,27C5.776,27,6,27.224,6,27.5S5.776,28,5.5,28z" fill="#263238"/><path d="M5.5,28C5.224,28,5,27.776,5,27.5S5.224,27,5.5,27C6.327,27,7,26.327,7,25.5v-22C7,3.224,7.224,3,7.5,3   S8,3.224,8,3.5v22C8,26.879,6.878,28,5.5,28z" fill="#263238"/><path d="M5.5,30C3.019,30,1,27.981,1,25.5v-13C1,12.224,1.224,12,1.5,12S2,12.224,2,12.5v13C2,27.43,3.57,29,5.5,29   C5.776,29,6,29.224,6,29.5S5.776,30,5.5,30z" fill="#263238"/><path d="M26.5,30h-21C5.224,30,5,29.776,5,29.5S5.224,29,5.5,29C7.43,29,9,27.43,9,25.5v-23C9,2.224,9.224,2,9.5,2   h21C30.776,2,31,2.224,31,2.5v23C31,27.981,28.981,30,26.5,30z M8.326,29H26.5c1.93,0,3.5-1.57,3.5-3.5V3H10v22.5   C10,26.912,9.346,28.175,8.326,29z" fill="#263238"/><g><path d="M23.998,10c-0.207,0-0.395-0.128-0.468-0.324l-1.5-4c-0.097-0.259,0.034-0.547,0.292-0.644    c0.258-0.101,0.547,0.033,0.644,0.292l0.885,2.361l0.457-2.284c0.054-0.271,0.318-0.449,0.588-0.392    c0.271,0.054,0.446,0.317,0.392,0.589l-0.801,4c-0.044,0.219-0.228,0.382-0.45,0.399C24.025,9.999,24.011,10,23.998,10z" fill="#263238"/><path d="M20.998,10c-0.013,0-0.027-0.001-0.041-0.002c-0.223-0.018-0.406-0.182-0.45-0.4l-0.797-4    c-0.054-0.271,0.122-0.534,0.393-0.588c0.27-0.057,0.534,0.121,0.588,0.393l0.454,2.28l0.884-2.358    c0.097-0.259,0.385-0.393,0.644-0.292c0.258,0.097,0.389,0.385,0.292,0.644l-1.5,4C21.393,9.872,21.205,10,20.998,10z" fill="#263238"/><path d="M14.5,10c-0.163,0-0.32-0.08-0.415-0.221L12,6.689V9.5c0,0.276-0.224,0.5-0.5,0.5S11,9.776,11,9.5v-4    C11,5.224,11.224,5,11.5,5h0.301c0.166,0,0.321,0.083,0.415,0.221L14,7.865V5.5C14,5.224,14.224,5,14.5,5S15,5.224,15,5.5v4    c0,0.22-0.144,0.414-0.354,0.479C14.598,9.993,14.549,10,14.5,10z" fill="#263238"/><path d="M18.5,10h-2C16.224,10,16,9.776,16,9.5v-4C16,5.224,16.224,5,16.5,5h2C18.776,5,19,5.224,19,5.5    S18.776,6,18.5,6H17v3h1.5C18.776,9,19,9.224,19,9.5S18.776,10,18.5,10z" fill="#263238"/><g><path d="M18,8h-1.5C16.224,8,16,7.776,16,7.5S16.224,7,16.5,7H18c0.276,0,0.5,0.224,0.5,0.5S18.276,8,18,8z" fill="#263238"/></g><path d="M27.5,10c-0.827,0-1.505-0.469-1.813-1.255c-0.101-0.257,0.026-0.547,0.283-0.648    c0.256-0.1,0.548,0.025,0.648,0.283C26.729,8.663,26.972,9,27.5,9c0.361,0,0.529-0.34,0.529-0.57c0-0.198-0.172-0.313-0.688-0.555    c-0.33-0.154-0.703-0.33-0.965-0.629c-0.358-0.408-0.455-1.001-0.239-1.478C26.358,5.28,26.842,5,27.465,5    c0.801,0,1.223,0.451,1.269,0.502c0.183,0.207,0.164,0.523-0.042,0.706c-0.204,0.182-0.514,0.166-0.698-0.033    C27.976,6.158,27.804,6,27.465,6c-0.153,0-0.349,0.031-0.417,0.181c-0.055,0.121-0.021,0.291,0.079,0.405    c0.125,0.143,0.387,0.266,0.639,0.384c0.533,0.251,1.263,0.593,1.263,1.46C29.029,9.185,28.445,10,27.5,10z" fill="#263238"/></g><g><g><g><path d="M27.5,26h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,26,27.5,26z" fill="#263238"/></g><g><path d="M18.5,26h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,26,18.5,26z" fill="#263238"/></g></g><g><g><path d="M27.5,24h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,24,27.5,24z" fill="#263238"/></g><g><path d="M18.5,24h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,24,18.5,24z" fill="#263238"/></g></g><g><g><path d="M27.5,22h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,22,27.5,22z" fill="#263238"/></g><g><path d="M18.5,22h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,22,18.5,22z" fill="#263238"/></g></g><g><g><path d="M27.5,20h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,20,27.5,20z" fill="#263238"/></g><g><path d="M18.5,20h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,20,18.5,20z" fill="#263238"/></g></g><g><g><path d="M27.5,18h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,18,27.5,18z" fill="#263238"/></g><g><path d="M18.5,18h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,18,18.5,18z" fill="#263238"/></g></g><g><g><path d="M27.5,16h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,16,27.5,16z" fill="#263238"/></g><g><path d="M18.5,16h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,16,18.5,16z" fill="#263238"/></g></g><g><g><path d="M27.5,14h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S27.776,14,27.5,14z" fill="#263238"/></g><g><path d="M18.5,14h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5      S18.776,14,18.5,14z" fill="#263238"/></g></g></g></g></svg>' + linkHTML + '</p></md-card>';
             
              ngrsButton.parentNode.insertBefore(newspaperNode, ngrsButton.nextSibling);
          }
      } else {
          //If the user has not currently faceted results to newspaper articles, then remove the button
          if (querystring.search('newspaper_articles') !== -1) {
              document.getElementById('newspaperButton').style = "display: none;";
          }
      }
  }
}

