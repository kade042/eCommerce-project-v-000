angular
  .module('eCommerce')
  .directive('compareTo', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        compare_to: "=compareTo"
      },
      link: function (scope, elem, attr, ngModel) {

        ngModel.$validators.compareTo = function (value) {
          scope.result = true;
          scope.result = (value == scope.compare_to);
          return scope.result;

        };

        scope.$watch("compare_to", function() {
          ngModel.$validate();
        });
      }
    }
  })
