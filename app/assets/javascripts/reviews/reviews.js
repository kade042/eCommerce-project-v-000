
angular
  .module('eCommerce')
  .directive('reviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'reviews/_review.html'
    }
  });
