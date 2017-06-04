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
    var fizzbuzzList = document.createElement("ol");
    form.appendChild(fizzbuzzList);
    fizzbuzzList.setAttribute("id", "fizzbuzz_list");

    for(var i = 1; i <= userInputParse ; i++){
      if (i % 3 == 0 && i % 5 == 0) {
        var fizzbuzzLi = document.createElement("li");
        var fbText = document.createTextNode("FizzBuzz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(fbText);
      } else if (i % 3 == 0) {
        var fizzbuzzLi = document.createElement("li");
        var fText = document.createTextNode("Fizz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(fText);
      } else if (i % 5 == 0) {
        var fizzbuzzLi = document.createElement("li");
        var bText = document.createTextNode("Buzz");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(bText);
      } else {
        var fizzbuzzLi = document.createElement("li");
        var number = document.createTextNode("");
        fizzbuzzList.appendChild(fizzbuzzLi);
        fizzbuzzLi.appendChild(number);
      };
    }
  };
};
  