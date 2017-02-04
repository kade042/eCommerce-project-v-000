angular
  .module('review', ['ngMessages'])
  .controller("ReviewCtrl", ['$http','items', function($http, items){
    //var ctrl = this;
    this.review = {};
    this.addReview = function(item){
      items.addReview(item.id, this.review).success(function (data) {
        //console.log(data.review);
        item.reviews.push(data.review);

      });
      //console.log(item);
      this.review = {};
    };

  }])
  .filter('topReview', function () {
    return function(input){

      input.sort(function (a, b) {
        return b.upvotes - a.upvotes
      });
      return input;
    }

  });
