
$(document).on("click", "#category", function(){
    $.getJSON('/categories').done(function(response) {
      var categories = response['categories'];
      var html ='';
      categories.forEach(function(category) {
          html += '<li><a href="/categories/'+ category.id +'">'+ category.title+'</a><li>';
        });
      $('#categoryList').html(html);
    });

});
