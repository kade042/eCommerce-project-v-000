angular
  .module('search-item', ['ngMessages'])
  .directive('searchItem', function (items)  {
    return {
      restrict: 'E',
      templateUrl: 'search/_search.html',
      controller : function ($scope)  {

        var ctrl = this;
        ctrl.search = function (title) {
          items.searchByTitle(title);

        }
      },
      controllerAs: 'ctrl'

    }

  })
  .controller('SearchCtrl', function ($scope, itemPromise) {
    console.log(itemPromise);
    $scope.items = itemPromise.data.items_search;
  });