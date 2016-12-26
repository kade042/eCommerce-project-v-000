
angular
  .module('eCommerce')
  .factory('items', function($http) {
    var obj = {
      items: []
    }

    obj.getAllItems = function() {
       return $http.get('/items.json');
    };

    obj.getItem = function(id) {
      return $http.get('/items/'+ id +'.json');
    };

    obj.addReview = function(id, review){
      return $http.post('/items/'+ id +'/reviews.json', review);
    };

    obj.getByCategory = function (id) {
      return $http.get('/categories/'+ id +'/items.json');
    };

    obj.searchByTitle = function (search_term) {
       return obj.items = $http.get('/items_search.json', { "params": { "keywords": search_term }});
    };

    return obj;

  });
