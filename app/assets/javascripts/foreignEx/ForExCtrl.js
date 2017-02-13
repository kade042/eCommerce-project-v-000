angular
  .module('eCommerce')
  .controller('ForExCtrl', ['$rootScope', 'items', '$filter', '$scope', '$http', function ($rootScope, items, $filter, $scope, $http) {
    items.getForExRate().success(function (res) {
      //console.log(res);
      $rootScope.rates = res.rates
    });

    $scope.forExConvert = function (k) {
      //console.log($scope.rates[k]);
      fx.rates = $rootScope.rates;
      $rootScope.exName = k;

    }
  }]).filter('customCurrency', ['$filter', function ($filter) {
      return function (price, exName) {
        //console.log(input);
        if(exName !== undefined){
          var tmp = fx(price).to(exName).toFixed(2);
          return $filter('currency')(tmp, exName + " ");
        }else{
          return $filter('currency')(price, "USD ")
        }

      }
  }]);
