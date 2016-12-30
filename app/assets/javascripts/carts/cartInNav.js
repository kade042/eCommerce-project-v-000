angular
  .module('cart-directive')
  .directive('cartNav', ['carts', function(carts) {
    return {
      restrict: 'E',
      templateUrl:'carts/_cartInNav.html',
      controller: function () {
        var ctrl = this;
        console.log(carts.line_items);
        carts.line_items.then(function (res) {
          console.log(res);
          ctrl.line_items = res.data.line_items;
        });

      //  console.log(ctrl.line_items);
        ctrl.total_no_item = function () {
          var total = 0;
          angular.forEach(ctrl.line_items, function (li) {
            total += li.quantity;
          });
          return total;
        }
      },
      controllerAs: "ctrl"
    };

  }]);
