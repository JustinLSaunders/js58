window.onload = function() {
  var form = document.getElementById("fizzbuzz_form");
  var button = document.getElementById("go-button");
      
  button.onclick = function fizzbuzz(){

    event.preventDefault();

    var getOldList = document.getElementById("fizzbuzz_list");
    if (getOldList != null) {
      var oldList = document.getElementById("fizzbuzz_list");
      form.removeChild(oldList)
    }

    var userInput = document.getElementById("user-input").value;
    var userInputParse = Number.parseInt(userInput);
    var fizzbuzzList = document.createElement("ul");
    form.appendChild(fizzbuzzList);
    fizzbuzzList.setAttribute("id", "fizzbuzz_list");

    function fizzbuzzCreate(text, className){
      var fizzbuzzLi = document.createElement("li");
      fizzbuzzLi.setAttribute("class", className);
      var fbText = document.createTextNode(i + " " + text);
      fizzbuzzList.appendChild(fizzbuzzLi);
      fizzbuzzLi.appendChild(fbText);
    }

    for(var i = 1; i <= userInputParse ; i++){
      if (i % 3 == 0 && i % 5 == 0) {
        fizzbuzzCreate("FizzBuzz", "fizzbuzz_item");
      } else if (i % 3 == 0) {
        fizzbuzzCreate("Fizz", "fizz_item");
      } else if (i % 5 == 0) {
        fizzbuzzCreate("Buzz", "buzz_item");
      } else {
        fizzbuzzCreate("");
      };
    }
  };
};
  