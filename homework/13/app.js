var baseURL="https://newsapi.org/v1/articles";
var apiKey = "9f672f4d107445ee8db2194825da2f38";

var nprURL = "https://api.npr.org";
var nprKey = "7uDMeHXVJeu1IxDHZPQgG5eKCL5CINVXxO5eoJhQ";

$('#dropdown').change(function(){
  $('.article-list').empty();
  $('#news-source').empty();

  var source = $("select#dropdown option:checked").val();
  var sourceText = $("select#dropdown option:checked").text();

  $('#news-source').text(sourceText);
  $('#loader').toggle();
  $(function(){
    $.get(baseURL + "?source=" + source + "&apiKey=" + apiKey, function(data){
      // console.log(data);
      // setTimeout(function() {
      //   $this.button('reset');
      // });
      $('#loader').toggle();
      for(var i = 0; i <= 9; i++){
        var title = data.articles[i].title;
        var description = data.articles[i].description;
        var img = data.articles[i].urlToImage;
        var url = data.articles[i].url;
        // var newImg = $('<img>').attr('src', img);
        // var newTitle = $('<h3>').text(title);
        // var newDescription = $('<p>').text(description);
        var newRow = $('<div>').attr({'class':'row', 'id':'article-row' + i});
        var imgContainer = $('<div>').attr({'class':'col-xs-9 col-sm-5 col-lg-4', 'id':'img-container' + i});
        var articleContainer = $('<div>').attr({'class':'col-xs-9 col-sm-7 col-lg-8', 'id':'article-container' +i});
        $('.article-list').append(newRow);
        $('#article-row' + i).append(imgContainer, articleContainer);
        $('#img-container' + i).append('<a href="' + url + '" target="_blank"><img alt="" class="article-img" src="' + img + '"></a>')
        $('#article-container' + i).append('<h3><a href="' + url + '" target="_blank"><h3>' + title + '</a></h3><p>' + description + '</p>');      }
        $("#dropdown").val($("#dropdown option:first").val());
    });
  });
});

