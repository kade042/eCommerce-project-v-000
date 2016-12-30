angular
  .module('categories-directives', [])
  .controller('CategoryCtrl', ['$scope', function($scope, itemPromise) {
    $scope.items = itemPromise.data.items;
  }]);
