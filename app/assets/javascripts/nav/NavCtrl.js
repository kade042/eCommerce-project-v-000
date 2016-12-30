angular
  .module('eCommerce')
  .controller('NavCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.signedIn = Auth.isAuthenticated;

    $scope.logout = function() {
      Auth.logout($scope.user).then(function () {
        $state.go('store');
      });
    }

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      //console.log(user);
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });

  }]);
