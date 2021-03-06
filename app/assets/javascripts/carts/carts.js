angular
  .module('cart-directive')
  .service('carts', ['$http', function ($http) {
    var o = {
      line_items: []
    };

    o.getAllLineItems = function() {
      return o.line_items = $http.get('/line_items.json');
    }

    o.updateLineItem = function (id, li) {
       $http.put('/line_items/'+ id, li);
       o.getAllLineItems()

    }

    o.addToCart = function (id) {
      return $http.post('/line_items.json', {item_id: id});
    }

    o.removeLineItem = function (id) {
      $http.delete('/line_items/'+id);
      o.getAllLineItems()
    }

    o.getAllLineItems();
    return o;
  }]);
