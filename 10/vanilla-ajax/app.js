var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  
  console.log("State: ", request.readyState);

  if(request.readyState == 4){
    var parsedJSON = JSON.parse(request.responseText);
    console.log("Response: ", parsedJSON);

    var elem = document.getElementById('body');
    elem.innerHTML = parsedJSON[0].description;
    // var text = document.textNode(parsedJSON[0].name);
    // console.log()

  }
};




request.open('GET', 'http://data.consumerfinance.gov/api/views.json');
request.send();