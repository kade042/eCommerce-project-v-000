angular
  .module('eCommerce')
  .controller('StoreCtrl', ['$scope', 'items', 'itemPromise', function($scope, items, itemPromise) {
    //console.log(items.items);
    //console.log(itemPromise);
    $scope.page = 0;
    $scope.items = itemPromise; //items.getAllItems($scope.page);//itemPromise.data.items;
    //console.log(items.getAllItems($scope.page));
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
