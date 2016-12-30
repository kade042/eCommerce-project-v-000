angular
  .module('cart-directive')
  .directive('cart', ['carts', function (carts) {
    return {
      restrict: 'E',
      templateUrl: 'carts/_addToCartButton.html',
      controller: function () {
        this.addToCart = function (id) {
          carts.addToCart(id);
        }
      },
      controllerAs: 'ctrl'
    }
  }]);
