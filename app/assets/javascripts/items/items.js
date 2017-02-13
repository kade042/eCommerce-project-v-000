
angular
  .module('item-module')
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

    obj.updateReview = function (id, review) {
      $http.put('/reviews/'+id, review);
    }

    obj.getForExRate = function () {
      return $http.get('http://api.fixer.io/latest?base=USD');
    }
    return obj;

  }]);
