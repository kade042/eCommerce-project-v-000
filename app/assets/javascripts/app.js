
angular
  .module('eCommerce', ['ui.router', 'templates', 'Devise', 'ngMessages', 'descriptions-directive', 'categories-directives', 'auth-controller', 'cart-directive', 'search-item'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('store', {
        url: '/store',
        templateUrl: 'store/_store.html',
        controller: 'StoreCtrl',
        resolve: {
          itemPromise: function(items){
            return items.getAllItems();
          }
        }
      })
      .state('items', {
        url: '/items/:id',
        templateUrl: 'items/_show.html',
        controller: 'ItemCtrl',
        resolve: {
          item: function($stateParams, items) {
            return items.getItem($stateParams.id);
          }
        }
      })
      .state('categories', {
        url: '/categories/:id',
        controller: 'CategoryCtrl',
        templateUrl: 'store/_store.html',
        resolve: {
          itemPromise: function ($stateParams, items) {
            return items.getByCategory($stateParams.id);
          }
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('store');
          })
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('store');
          })
        }
      })
      .state('cart', {
        url: '/cart/:id',
        controller: 'CartsCtrl',
        templateUrl: 'carts/_carts.html',
        resolve: {
          line_items: function ($stateParams, carts) {
            return carts.getAllLineItems();
          }
        }
      })
      .state('search', {
        url:'/search',
        controller: 'SearchCtrl',
        templateUrl: 'search/_index.html',
        resolve :{
          itemPromise: function (items) {
            return items.items;
          }
        }

      });

      $urlRouterProvider.otherwise('store');
    }
]);
