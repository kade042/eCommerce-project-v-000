angular
  .module('eCommerce')
  .controller('NavCtrl', ['$scope', '$state', 'Auth', function ($scope, $state, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    console.log($scope.signedIn());
    console.log(Auth);
    console.log($scope.user);

    $scope.logout = function() {
      Auth.logout($scope.user).then(function () {
        $state.go('store');
      });
    }

    Auth.currentUser().then(function (user){
      console.log(user);
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
  
      $scope.user = user;
      $scope.signedIn = Auth.isAuthenticated;
      console.log($scope.signedIn());
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });

  }]);
