
angular
  .module('eCommerce')
  .directive('reviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'reviews/_review.html',
      controller: function () {
        //console.log(this);
        this.incrementUpvotes = function (review) {
          //console.log('hi');

          review.upvotes += 1;
        }

        this.decrementUpvotes = function (review) {
          //console.log('hello');
          review.upvotes -= 1;
        }
      },
      controllerAs: 'rev'

    }
  });
