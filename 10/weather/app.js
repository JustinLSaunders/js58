// var request = new XMLHttpRequest();

// request.onreadystatechange = function() {

//   if(request.readyState == XMLHttpRequest.DONE){
//     var parsedJSON = JSON.parse(request.responseText);
//     console.log(parsedJSON);

//     var currentTemp = parsedJSON.currently.temperature;

//     var elem = document.getElementById('body');
//     elem.innerHTML = currentTemp;
//   }
// };

// request.open('GET', 'https://js58-proxy.herokuapp.com/forecast/e07a7d9bd109eb8d109a357edd677ef1/40.72,-74.00');
// request.send();

var url = "https://js58-proxy.herokuapp.com/forecast/e07a7d9bd109eb8d109a357edd677ef1/40.72,-74.00";

$.getJSON (url, function(r){
  var currentTemp = r.currently.temperature;
  var elem = document.getElementById('body');
  elem.innerHTML = currentTemp;
});