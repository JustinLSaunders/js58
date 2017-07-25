$(function() {

  _500px.init({
    sdk_key:'1a4561ce3fdc01d83b431a093cb2fb01b5d5f1dd'
  });

  $('#login').click(function() {
    _500px.login();
  });
  _500px.on('authorization_obtained', function() {
    console.log("Authorized Successfully!");
    $('#login').hide();
  });
});

$('#search-btn').click(function(){
  $('#loading').toggle();

  userSearch();
})

var imageContainer = document.getElementById("image-container");

function clearOldItems(parentElem, childElem){
  var oldResults = document.getElementById(childElem);
  if (oldResults != null) {
    var oldChild = document.getElementById(childElem);
    parentElem.removeChild(oldChild)
  };
};

var userSearch = function(){

  var inputLat = $('#user-input-lat').val();
  console.log(inputLat);
  var inputLong = $('#user-input-long').val();
  var newImages = $('<div id="results">');

  if (inputLat === "" || inputLong === ""){

    navigator.geolocation.getCurrentPosition(function(pos){
      var posLat = pos.coords.latitude;
      var posLong = pos.coords.longitude;

      var searchOptions = {
        geo: posLat + ',' + posLong + ',' + '25mi',
        only: 'Landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      };

      console.log(searchOptions);

      clearOldItems(imageContainer, "results");

      _500px.api('/photos/search', searchOptions, function(resp){
        $('#loading').toggle();
        $('.image-results-view').show();
        var photos = resp.data.photos;
        $(imageContainer).append(newImages);
        var resultsContainer = document.getElementById("results");
        for(var i = 0; i < photos.length; i++){
          var newImg = $('<img class="image">').attr('src', photos[i].image_url);
          $('#results').append(newImg);
        }
      });
    });

  } else {

    var searchOptions = {
      geo: inputLat + ',' + inputLong + ',' + '25mi',
      only: 'Landscapes',
      image_size: 3,
      rpp: 28,
      sort: 'highest_rating'
    };

    console.log(searchOptions);

    clearOldItems(imageContainer, "results");

    _500px.api('/photos/search', searchOptions, function(resp){
      $('#loading').toggle();
      $('.image-results-view').show();
      var photos = resp.data.photos;
      $(imageContainer).append(newImages);
      var resultsContainer = document.getElementById("results");
      for(var i = 0; i < photos.length; i++){
        var newImg = $('<img class="image">').attr('src', photos[i].image_url);
        $('#results').append(newImg);
      }
    });
  }
};
