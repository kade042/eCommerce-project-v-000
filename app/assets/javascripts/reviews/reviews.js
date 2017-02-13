
angular
  .module('review')
  .directive('reviews', ['items', function(items){
    return {
      restrict: 'E',
      templateUrl: 'reviews/_review.html',
      controller: function () {
        //console.log(this);
        this.vote = 0;
        this.upvotes = function (review) {
          //console.log('hi');

          review.upvotes += 1;
          items.updateReview(review.id, review);

        }

        this.downvotes = function (review) {
          //console.log('hello');

          review.upvotes -= 1;
          items.updateReview(review.id, review);

        }
        //console.log(review);


      },
      controllerAs: 'rev'


    }
  }]);
