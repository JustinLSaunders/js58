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

    for(var i = 1; i <= userInputParse ; i++){
      if (i % 3 == 0 && i % 5 == 0) {
        var fizzbuzzLi = document.createElement("li");
        fizzbuzzLi.setAttribute("class", "fizzbuzz_item");
        var fbText = document.createTextNode(i + " FizzBuzz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(fbText);
      } else if (i % 3 == 0) {
        var fizzbuzzLi = document.createElement("li");
        fizzbuzzLi.setAttribute("class", "fizz_item");
        var fText = document.createTextNode(i + " Fizz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(fText);
      } else if (i % 5 == 0) {
        var fizzbuzzLi = document.createElement("li");
        fizzbuzzLi.setAttribute("class", "buzz_item");
        var bText = document.createTextNode(i + " Buzz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(bText);
      } else {
        var fizzbuzzLi = document.createElement("li");
        fizzbuzzLi.setAttribute("class", "null_item");
        var number = document.createTextNode(i);
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(number);
      };
    }
  };
};
  