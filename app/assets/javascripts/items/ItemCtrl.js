angular
  .module('eCommerce')
  .controller('ItemCtrl', ['$scope', 'items', 'item', function($scope, items, item) {
    console.log(item.data.item);
    $scope.item = item.data.item;
  }]);
