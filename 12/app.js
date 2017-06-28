$(function() {
  navigator.geolocation.getCurrentPosition(function(pos){
    console.log(pos);
  })

  // DOM is now ready
  _500px.init({
    sdk_key:'1a4561ce3fdc01d83b431a093cb2fb01b5d5f1dd'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function() {
    console.log("Authorized Successfully!");
    $('#login').hide();

    var userSearch = function(){

    };

    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;

      var searchOptions = {
        geo: lat + ',' + long + ',' + '25mi',
        only: 'Landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      };

      console.log(searchOptions);

      _500px.api('/photos/search', searchOptions, function(resp){
        $('.image-results-view').show();
        var photos = resp.data.photos;
        for(var i = 0; i < photos.length; i++){
          var newImg = $('<img>').attr('src', photos[i].image_url);
          $('.images').append(newImg);
        }
      })
    });
  });
});