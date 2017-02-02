angular
  .module('eCommerce')
  .controller('ItemCtrl', ['$scope', 'items', 'item', function($scope, items, item) {
    $scope.item = item.data.item;

  }]);
