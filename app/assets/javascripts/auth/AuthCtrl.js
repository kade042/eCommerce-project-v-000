angular
  .module('auth-controller', ['ngMessages'])
  .controller('AuthCtrl', function($scope, $state, Auth){

    $scope.login = function() {
      Auth.login($scope.user).then(function(){
        $state.go('store');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(){
        $state.go('store');
      });
    };
});
