angular
  .module('item-module', ['ngMessages'])
  .controller('ItemCtrl', ['$scope', 'items', 'item', function($scope, items, item) {
    $scope.item = item.data.item;
    console.log($scope.item);
  }]);
