
angular
  .module('descriptions-directive', [])
  .directive('descriptions', function () {
    return {
      restrict: 'E',
      templateUrl: 'descriptions/_descriptions.html'
    };
  });
