angular
  .module('eCommerce')
  .controller('StoreCtrl', ['$scope', 'items', 'itemPromise', function($scope, items, itemPromise) {
    //console.log(items.items);
    $scope.items = itemPromise.data.items;
  }])
