angular
  .module('categories-directives')
  .directive('categories', function ($http) {

    return {
      restrict: 'E',
      templateUrl: 'categories/_categories.html',
      controller: function () {
        var ctrl = this;
        ctrl.categories = {};
        ctrl.getAllCategories = function () {
          $http.get('/categories.json').success(function(res) {
            ctrl.categories = res.categories;
          });
        };
        
      },
      controllerAs: 'category'
    };
  });
