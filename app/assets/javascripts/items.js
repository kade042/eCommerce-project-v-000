function showReviews(itemId) {
  var url = "/items/" + itemId;

  $.getJSON(url).done(function(response) {
    var reviews = response['item']['reviews'].sort(function(a, b) {
      return a.item_id - b.item_id;
    });

    var html = '<section class="container">';
    reviews.forEach(function(review) {
        html += '<h4>' + review.title + ':</h4>';
        html += '<p>By <strong>'+review.user.name +'</strong> on ' + review.updated_at + '</p>';
        html += review.content;
    });

    html += '</section>'
    $('div[id=review]').html(html);
  });
}



$(document).on('click','a[href="#review"]', function() {
    var item_id = $(this).data('id');
    showReviews(item_id);
});
