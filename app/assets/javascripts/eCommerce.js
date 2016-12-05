angular
  .module('eCommerce', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('store', {
        url: '/store',
        templateUrl: 'store/_store.html',
        controller: 'StoreCtrl',
        resolve: {
          itemPromise: ['items', function(items){
            return items.getAllItems();
          }]
        }
      })
      .state('items', {
        url: '/items/:id',
        templateUrl: 'items/_item.html',
        controller: 'ItemCtrl'
      });

      $urlRouterProvider.otherwise('store');
    }
]);
