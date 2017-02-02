angular
  .module('cart-directive')
  .directive('cartNav', ['carts', function(carts) {
    return {
      restrict: 'E',
      templateUrl:'carts/_cartInNav.html',
      link: function (scope, elem, attr, ctrl) {

        carts.line_items.then(function (res) {
          scope.line_items = res.data.line_items;
        });

        scope.number_item = function () {
          var total = 0;
          angular.forEach(scope.line_items, function (li) {
            total += li.quantity;
          });
          return total;
        }
      }
    };

  }]);
