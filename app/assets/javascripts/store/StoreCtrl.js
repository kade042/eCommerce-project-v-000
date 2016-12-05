angular
  .module('eCommerce')
  .controller('StoreCtrl', ['$scope', 'items', 'itemPromise', function($scope, items, itemPromise) {
    $scope.items = itemPromise.data.items;

  }])
