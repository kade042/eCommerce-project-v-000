
angular
  .module('eCommerce')
  .factory('items', ['$http', function($http) {
    var obj = {
      items: []
    }

    obj.getAllItems = function(page=0) {
       return $http.get('/items.json', {"params": {"page": page}}).then(function (res) {
          return res.data.items;
       });
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

  }]);
