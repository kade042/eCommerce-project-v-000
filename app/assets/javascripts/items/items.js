angular
  .module('eCommerce')
  .factory('items', ['$http', function($http) {
    var obj = {
      items : []
    }

    obj.getAllItems = function() {
      return $http.get('/items.json').success(function(data) {
        obj.items.push(data);
      });
    }
    return obj;

  }]);
