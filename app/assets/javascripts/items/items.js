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

    obj.getItem = function(id) {
      return $http.get('/items/'+ id + '.json').success(function(res) {
        return res.data;
      });
    }
    return obj;

  }]);
