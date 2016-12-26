angular
  .module('categories-directives', [])
  .controller('CategoryCtrl', function($scope, itemPromise) {
    $scope.items = itemPromise.data.items;
  });
