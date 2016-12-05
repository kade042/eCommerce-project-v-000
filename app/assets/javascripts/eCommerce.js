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
        templateUrl: 'items/_show.html',
        controller: 'ItemCtrl',
        resolve: {
          item: ['$stateParams', 'items', function($stateParams, items) {
            return items.getItem($stateParams.id);
          }]
        }
      });

      $urlRouterProvider.otherwise('store');
    }
]);
