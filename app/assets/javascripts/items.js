function showReviews(itemId) {
  var url = "/items/" + itemId;

  $.getJSON(url).done(function(response) {
    var reviews = response['item']['reviews'].sort(function(a, b) {
      return a.item_id - b.item_id;
    });

    var html = '<section class="container">';
    reviews.forEach(function(review) {
        html += '<h4>' + review.title + ':</h4>';
        html += '<p>By '+review.user.name +' on ' + review.updated_at + '</p>';
        html += review.content;
    });
    html += '</section>'
    $('div[id=review]').html(html);
  });
}


$(function(){
  var reviewTab = $('a[href="#review"]');
  reviewTab.click(function() {
    var item_id = $(this).data('id');
    showReviews(item_id);
  });
});
