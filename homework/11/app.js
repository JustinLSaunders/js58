// runs the function when the page is loaded

$(function(){
  var loading = $('#loading-marquee');

  $('#get-weather').on('click', function(event){

    $(loading).toggle();
    event.preventDefault();

    // obtain the values that the user has typed in by getting the element by an ID and calling val()
    var long = $('#longitude').val();
    var lat = $('#latitude').val();
    console.log(long, lat);

    // https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lat

    var baseURL = "https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43";
    var weatherURL = baseURL + "/" + long + "," + lat;

    $.get(weatherURL, function(data){
      $(loading).toggle();
      console.log(data);
      var location = data.timezone
      var temp = data.currently.temperature;
      var humidity = data.currently.humidity;
      var wind = data.currently.windSpeed;

      function weather(htmlID, weatherObj){
        $(htmlID).html(weatherObj);
      };

      weather("#location", " " + location);
      weather("#current-temp", temp);
      weather("#current-humidity", (humidity * 100) + "%");
      weather("#current-wind", wind);
    });
  });
});