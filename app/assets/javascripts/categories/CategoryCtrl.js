angular
  .module('categories-directives', [])
  .controller('CategoryCtrl', ['$scope', 'itemPromise', function($scope, itemPromise) {
    $scope.items = itemPromise.data.items;
  }]);
