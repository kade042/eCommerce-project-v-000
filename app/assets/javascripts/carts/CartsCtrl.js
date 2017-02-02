angular
  .module('cart-directive', [])
  .controller('CartsCtrl', ['$rootScope','$scope', 'line_items', 'carts', function ($rootScope, $scope, line_items, carts) {

    $scope.line_items = line_items.data.line_items;

    $scope.total = function() {
      var total = 0;
      angular.forEach($scope.line_items, function(li) {
        total += li.item.price * li.quantity;
      });
      return total;
    }

    $rootScope.total_no_item = function () {

      var total = 0;
      angular.forEach($scope.line_items, function (li) {
        total += li.quantity;
      });
      return total;
    }

    $scope.updateCart = function (li) {
      console.log(li);
      carts.updateLineItem(li.id, li);
    }

    $scope.removeItem = function (id, index) {
      carts.removeLineItem(id);
      $scope.line_items.splice(index, 1);

    }

  }]);
