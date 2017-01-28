angular
  .module('eCommerce')
  .controller("ReviewCtrl", ['$http','items', function($http, items){
    var ctrl = this;
    ctrl.review = {};
    this.addReview = function(item){
      items.addReview(item.id, this.review).success(function (data) {
        //console.log(data);
        item.reviews.push(data.review);

      });
      console.log(item);
      this.review = {};
    };


  }]);
