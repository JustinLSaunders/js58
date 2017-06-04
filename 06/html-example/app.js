window.onload = function() {
  console.log("Hello World!");
};

window.onload = function(){
  var elem = document.getElementById("pig");
  console.log(elem);

  var elem2 = document.createElement("marquee");
  elem.appendChild(elem2);
  for (var i = 0; i<10; i++){
    var text = document.createTextNode("Fly away!");
    elem2.appendChild(text);
  }

  var btn = document.getElementById("my-button");
  btn.onclick = function(event) {
    var newElem = document.createElement("img");
    newElem.src = "http://placekitten.com/" + parseInt(Math.random() * 1000) + "/" + parseInt(Math.random() * 1000);

    elem.appendChild(newElem);
  }

  var form = document.getElementById("my-form");
  form.onsubmit = function(event){
    event.preventDefault();
    alert("You submitted the form");
  }
};