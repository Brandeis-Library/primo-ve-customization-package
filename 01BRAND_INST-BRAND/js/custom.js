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

    template:
     '<div id="footerWrapper"><md-content layout=row layout-xs=column><div flex=33 layout=column><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Find More</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=http://lts.brandeis.edu/research/archives-speccoll/ >University Archives and Special Collections</a></li><li><a href=https://scholarworks.brandeis.edu>Brandeis ScholarWorks</a></li><li><a href=http://brandeis.on.worldcat.org/ >WorldCat (Search Libraries Worldwide)</a></li><li><a href=http://www.brandeis.edu/library/research/books-articles/database-trials.html>Database Trials</a></li></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Library Services</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=https://www.brandeis.edu/library/about/hours/index.html>Library Hours</a></li><li><a href=https://www.brandeis.edu/library/borrowing/index.html>Borrowing</a></li><li><a href=https://www.brandeis.edu/library/borrowing/document-delivery.html target=_blank>Interlibrary Loan and Scan on Demand </a></li><li><a href="https://www.brandeis.edu/library/research/books-articles/purchase-request.html">Suggest a Library Purchase</a></li></md-card-content></md-card></div><div flex=33 layout=column flex-xs><md-card class=default-card><md-card-title><md-card-title-text><h2><span class=md-headline>Get Help</span></h2></md-card-title-text></md-card-title><md-card-content><ul><li><a href=https://guides.library.brandeis.edu/eresources>E-Resource Help</a></li><li><a href=https://www.brandeis.edu/library/research/help/index.html>Research Help</a></li><li><a href=https://www.brandeis.edu/library/about/services/accessibility.html>Accessibility</a></li><li><a href=https://guides.library.brandeis.edu/more_guides/citing_sources>Citing Sources</li><li><a href=https://guides.library.brandeis.edu/ >Research Guides</a></li><li><a href="http://answers.library.brandeis.edu/systems">System Status</a></li></md-card-content></div></md-content></div>',
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

  //Library banner alert message!!
  app.component('prmBackToLibrarySearchButtonAfter', {
    template: '',
  });

  app.component('prmBlankIllAfter', {
    controller: 'prmBlankIllAfterCtrl',
  });

   app.controller('prmBlankIllAfterCtrl', [
    function () {
      blankILLAfter();
    },
  ]);


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