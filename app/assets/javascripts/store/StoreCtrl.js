angular
  .module('eCommerce')
  .controller('StoreCtrl', ['$scope', 'items', 'itemPromise', function($scope, items, itemPromise) {

    $scope.page = 0;
    $scope.items = itemPromise; 

    $scope.previousPage = function() {
      if ($scope.page > 0) {
        $scope.page = $scope.page - 1;
        items.getAllItems($scope.page).then(function (res) {
          $scope.items = res
        });
      }
    }

    $scope.nextPage = function() {
      $scope.page = $scope.page + 1;
      items.getAllItems($scope.page).then(function (res) {
        //console.log(res);
        $scope.items = res
      });
    }

  }])
