angular
  .module('cart-directive')
  .directive('cartNav', ['carts', function(carts) {
    return {
      restrict: 'E',
      templateUrl:'carts/_cartInNav.html',
      /*link: function (scope, elem, attr, ctrl) {
       //var ctrl = this;
        console.log("Hey");
        carts.line_items.then(function (res) {
          console.log(res);
          scope.line_items = res.data.line_items;
        });

      //  console.log(ctrl.line_items);
        scope.number_item = function () {
          var total = 0;
          angular.forEach(scope.line_items, function (li) {
            total += li.quantity;
          });
          return total;
        }
      }*/
      controller: function () {
        var ctrl = this;
        console.log(carts.line_items);
        carts.line_items.then(function (res) {
          console.log(res);
          ctrl.line_items = res.data.line_items;
        });

      //  console.log(ctrl.line_items);
        ctrl.number_item = function () {
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
