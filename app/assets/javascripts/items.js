$(function() {
	$("#post-review").click(function(e){
    e.preventDefault();
		var reviewTitle = $('#title').val()
		var reviewContent = $('#content').val();
		var user_id = $('#userId').val();
		var item_id = $('#itemId').val();


		var data = { review :{
			title : reviewTitle,
			content : reviewContent,
			item_id : item_id,
			user_id : user_id
		}}

		var url = "http://localhost:3000/reviews";
		$.ajax({
	    url: url,
			type: "POST",
	    data: data,
	    dataType: 'json',
	    success: function (response) {
				$("ul[id=myTab]").children().first().removeClass('active');
				$("ul[id=myTab]").children().last().addClass('active');
				$("div[id=myTabContent]").children().first().removeClass('in active');
				$("div[id=myTabContent]").children().last().addClass('in active');
				showReviews(response.item_id);

	    }
	  });
	});
});

function showReviews(itemId) {
  var url = "/items/" + itemId;

  $.getJSON(url).done(function(response) {
    var reviews = response['item']['reviews'].sort(function(a, b){return b.id - a.id});

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



$(document).on('click','a[href="#review"]', function(e) {
    e.preventDefault();
    var item_id = $(this).data('id');
    showReviews(item_id);
});


$(document).on("click", '#open-review-box', function(e){
	$('#post-review-box').slideDown(400, function()
	  {
	    $('#title').focus();
	  });
	$('#open-review-box').fadeOut(100);
	$('#close-review-box').show();
});
