// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mainApp = angular.module('starter', ['ionic','ionic.service.core','ngSanitize']);

mainApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
    
    
})


mainApp.config(function($stateProvider, $urlRouterProvider) {
    
  $stateProvider

   .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html'
    })
  
   .state('category', {
        url: '/category/:selectedCategory',
        controller: 'Category',
        templateUrl: 'templates/listCategory.html'
    })
  
  .state('listAllCategories', {
        url: '/listallcategories',
        controller: 'ListAllCategories',
        templateUrl: 'templates/listAllCategories.html'
    })
  
  .state('product', {
        url: '/product/:selectedProduct',
        controller: 'Product',
        templateUrl: 'templates/productDetailed.html'
    })
  
  .state('atoz', {
        url: '/atoz',
        controller: 'Atoz',
        templateUrl: 'templates/atoz.html'
    })
  
     .state('listByLetter', {
        url: '/listByLetter/:selectedLetter',
        controller: 'Listbyletter',
        templateUrl: 'templates/listByLetter.html'
    })
  
   .state('listAllGenericNames', {
        url: '/listAllGenericName',
        controller: 'ListAllGenericName',
        templateUrl: 'templates/listAllGenericName.html'
    })
  
     .state('listByGenericNames', {
        url: '/listByGenericName/:selectedGeneric',
        controller: 'ListByGenericName',
        templateUrl: 'templates/listByGenericName.html'
    })
  
    $urlRouterProvider.otherwise("/home");
    
  })

mainApp.controller('Atoz', function ($scope,$rootScope) {

    $rootScope.words = [];
    
});

mainApp.controller('HomeCtrl', function ($scope,$rootScope) {

    $rootScope.words = [];
    
});

mainApp.controller('Category', function ($scope,$rootScope) {
$rootScope.words = [];
    
});

mainApp.controller('Product', function ($scope,$rootScope) {

    $rootScope.words = [];
});

mainApp.controller('ListAllCategories', function ($scope, $http, $stateParams, $rootScope) {

    
        $http.get('js/content.json').success(function(data) {

             // kreira prazan array u koji ce potrpat formirane podatke
            $scope.listOfAllCategories = [];
            $scope.listOfAllCategoriesDerivated = [];


             //prolazi kroz svaku vrijednog jsona
            angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item,redniBroj){

                $scope.listOfAllCategories.push({"catName":item.productCategory});

            });
        

        });
    
    // console.log($scope.listOfAllCategories);
})

mainApp.controller('ListAllGenericName', function ($scope, $http, $stateParams, $rootScope) {

   
        $http.get('js/content.json').success(function(data) {

             // kreira prazan array u koji ce potrpat formirane podatke
            $scope.listOfAllGenericNames = [];
            
             //prolazi kroz svaku vrijednog jsona
            angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item,redniBroj){
                
                $scope.listOfAllGenericNames.push({"catName":item.genericName});

            });
        });
        
})

mainApp.controller('ListByGenericName', function ($scope, $http, $stateParams, $rootScope) {

   
             $rootScope.words = [];
    
    
        $scope.selectedGeneric = $stateParams.selectedGeneric;
    console.log("- Selected Generic: "+$scope.selectedGeneric);
    
    
        $http.get('js/content.json').success(function(data) {

        // kreira prazan array u koji ce potrpat formirane podatke
      
          //  $scope.productNname;
            //$scope.productId;
            
             // kreira prazan array u koji ce potrpat formirane podatke
        $scope.listOfSelectedGenericItems = [];
      //  $scope.finalListForSidemenu = [];
            
            
        //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent($scope.selectedGeneric) == item.genericName ){

               // console.log("prod Cat 2-"-$scope.productCategory2);
                $scope.listOfSelectedGenericItems.push({"genName":item.productName});
            }

        });
            
  
         //  console.log($scope.listOfProductsForCat);
              
    });
        
})



mainApp.controller('FirstDropdown', function ($scope,$ionicPopover) {

    
$ionicPopover.fromTemplateUrl('templates/dropdown1.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });
    
});

mainApp.controller('SecondDropdown', function ($scope,$ionicPopover) {

    
    $ionicPopover.fromTemplateUrl('templates/dropdown2.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });
    
});


mainApp.controller('ThirdDropdown', function ($scope,$ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/dropdown3.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });
    
});

mainApp.controller('mainNavDropdown', function ($scope,$ionicPopover) {
    
   $ionicPopover.fromTemplateUrl('templates/mainNavDropdown.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });
    
});


mainApp.controller('SearchControl', function ($http,$scope,Words,$rootScope,$stateParams) {
    
    $rootScope.word = {
    name: ''
    }
    
  // $rootScope.selLanguage = selectedProduct;
  
   $rootScope.words = [];
    

  $rootScope.searchMovieDB2 = function() {

    Words.list($rootScope.word.name, function(words) {
        $rootScope.words = words;
      // console.log("ovo je slovo "+$rootScope.word.name);
         //var selLa = $rootScope.langVal;
      //  console.log(selLa+" langZaUListu");
    });
    
  };

});

mainApp.controller('ProductCategoryContent', function ($http,$scope,Words,$rootScope,$stateParams) {

    
     $rootScope.words = [];
    
    
        $scope.selectedCategory1 = $stateParams.selectedCategory;
   // console.log("-ProductDetiledSidebar-selected product"+$scope.selectedProduct2);
    
    
        $http.get('js/content.json').success(function(data) {

        // kreira prazan array u koji ce potrpat formirane podatke
      
          //  $scope.productNname;
            //$scope.productId;
            
             // kreira prazan array u koji ce potrpat formirane podatke
        $scope.listOfProductsForCat = [];
      //  $scope.finalListForSidemenu = [];
            
            
        //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent($scope.selectedCategory1) == item.productName ){

                $scope.productCategory3 = item.productCategory;
               // console.log("prod Cat 2-"-$scope.productCategory2);

            }

        });
            
              //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent( $scope.selectedCategory1) == item.productCategory ){

               $scope.listOfProductsForCat.push({"productname":item.productName,"photo":item.mainPhoto});
               // $scope.listOfProductsForCat.push({"photo":item.mainPhoto});

            }

        });
         //  console.log($scope.listOfProductsForCat);
              
    });
    
});

mainApp.controller('ProductDetailedContent', function ($http,$scope,$rootScope,$stateParams) {
    
    $rootScope.words = [];
    
    $scope.selectedProduct = $stateParams.selectedProduct;
    console.log("-"+$scope.selectedProduct);
    
    
        $http.get('js/content.json').success(function(data) {

        // kreira prazan array u koji ce potrpat formirane podatke
        $scope.listOfProducts = [];
        $scope.finalList = [];
            
            $scope.productName;
            $scope.productId;
            
            
        //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent($scope.selectedProduct) == item.productName ){
                
                $scope.productTitle = item.tiTitle;
                $scope.productId = item["-id"];
                $scope.productName = item.productName;
                $scope.productCategory = item.productCategory;
                $scope.productMainText  = item.mainText;
                $scope.productMainPhoto  = item.mainPhoto;
                //console.log($scope.productMainPhoto);
                
                
                 $scope.showImage = false;
                if( !$scope.productMainPhoto){
                    $scope.showImage = false;
                } else {

                    $scope.showImage = true;
                    //console.log("prolazim");
                }
                
            }

        });
    
    
    });
    
    
        $scope.tab1vis = true;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
        
     $scope.toggleFirstButt = function() {
        $scope.tab1vis = true;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
        // console.log("prva funkcija fired");
    };
    
    $scope.toggleSecondButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = true;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
    };
    
    $scope.toggleThirdButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = true;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
    };
    
    $scope.toggleForthButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = true;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
    };
    
    $scope.toggleFifthButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = true;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
    };
    
    $scope.toggleSixtButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = true;
        $scope.tab7vis = false;
        $scope.tab8vis = false;
    };
    
    $scope.toggleSeventhButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = true;
        $scope.tab8vis = false;
    };
    
    $scope.toggleEightButt = function() {
        $scope.tab1vis = false;
        $scope.tab2vis = false;
        $scope.tab3vis = false;
        $scope.tab4vis = false;
        $scope.tab5vis = false;
        $scope.tab6vis = false;
        $scope.tab7vis = false;
        $scope.tab8vis = true;
    };
    

});


mainApp.controller('Listbyletter', function ($http,$scope,$rootScope,$stateParams) {
    
    $scope.selectedLetter = $stateParams.selectedLetter;

    //console.log($scope.selectedLetter);
    
    $scope.sortType     = 'itemname'; // set the default sort type
    $scope.sortReverse  = false;

    
    $http.get('js/content.json').success(function(data) {

        // kreira prazan array u koji ce uzeti podatke za daljnji rad
        $scope.listOfWords = [];
        // lista kreirana za filtrirane podatke
        $scope.finalList = [];
      
        //prolazi kroz svaku vrijednog dobivenog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            // dodjeljuje potrebne vrijednosti novoj listi na kojoj se dalje radi
            $scope.listOfWords.push({
                "itemname": item.productName,
                "contentid": item ["-id"]
                });
        });
        
        // prolazi svaki item u novoj listi
        for (v = 0; v < $scope.listOfWords.length; v++) {

            // ako itemu iz liste prvi znak = odabrani znak
            if (angular.lowercase($scope.listOfWords[v].itemname.substring(0, 1)) ===  $scope.selectedLetter) {
                
                // provjera dali u listi postoji clan
                // gleda se pozicija trazenog pojma, ako je pozicija -1 znaci da ga nema i dodaje se
                // ako je bilo koji drugi broj onda znaci da postoji i ne ubacuje se
                var idx2 = $scope.finalList.indexOf($scope.listOfWords[v].itemname);
                
                // ako je vracena pozicija -1, dodaj u novu listu koja se ispisuje
                if (idx2 == -1) {
                    // dodavanje u novu listu
                    $scope.finalList.push({
                        "itemname": $scope.listOfWords[v].itemname,
                        "contentid": $scope.listOfWords[v].contentid
                    });

                }
            }

        }
        
        
    });
    
});

mainApp.controller('ProductDetiledSidebar', function ($http,$scope,$rootScope,$stateParams) {
    
     $rootScope.words = [];
    
    $scope.selectedProduct2 = $stateParams.selectedProduct;
   // console.log("-ProductDetiledSidebar-selected product"+$scope.selectedProduct2);
    
    
        $http.get('js/content.json').success(function(data) {

        // kreira prazan array u koji ce potrpat formirane podatke
      
          //  $scope.productNname;
            //$scope.productId;
            
             // kreira prazan array u koji ce potrpat formirane podatke
        $scope.listOfProductsForSidemenu = [];
      //  $scope.finalListForSidemenu = [];
            
            
        //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent($scope.selectedProduct2) == item.productName ){

                $scope.productCategory2 = item.productCategory;
               // console.log("prod Cat 2-"-$scope.productCategory2);

            }

        });
            
              //prolazi kroz svaku vrijednog jsona
        angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item, redniBroj) {

            if(decodeURIComponent( $scope.productCategory2) == item.productCategory ){

               $scope.listOfProductsForSidemenu.push({"productname":item.productName});

            }

        });
           console.log($scope.listOfProductsForSidemenu);
              
    });
    
});



//////////////// FACTORY

mainApp.factory('Words', function($http,$rootScope) {
    
    
   var cachedData;
   $rootScope.words = [];
    
   function getData(wordname, callback) {
      
       
     $http.get('js/content.json').success(function(data,$rootScope) {
         
         // kreira prazan array u koji ce potrpat formirane podatke
         var listOfWords = [];
         
        // var selectedLanguageInF = jezik;

         //prolazi kroz svaku vrijednog jsona
          angular.forEach(data.root.Main.ProductHolder.ProductPage, function(item,redniBroj){
              // dodjeljuje potrebne vrijednosti novom arrayu
              //  if($rootScope.langVal == "en"){

               listOfWords.push({"testname":item.productName});

               })
        // vraca nazad
         callback(listOfWords);
         cachedData = listOfWords;
    });
  }

  return {
    list: getData,
    find: function(name, callback) {
  //    console.log(name + "aaaaa");
      var word = cachedData.contentItem.filter(function(entry) {
          //console.log(entry.id == name+"kaeovo");
        return entry.id == name;
      })[0];
      callback(word);
    }
  };

});

mainApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});


