/* DOM Manipulation: Independent Practice

******FIRST******
First, read this page about something we didn't cover, prompts!
http://www.w3schools.com/jsref/met_win_prompt.asp
*****************

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, display the prompt asking what their favorite things are.
- When they hit enter, take the value they've typed in and add it to the list (remember: appendChild)

Bonus:

What they type in is blank, alert the user "you must type in a value!" if they press enter without adding the empty value to the page.
*/


window.onload = function() {
  var button = document.getElementById("new-thing-button");
  var list = document.getElementById("fav-list");
  var newItem = document.getElementById("new-thing");
  
  button.onclick = function favoritePrompt(event) {
    event.preventDefault();
    // var favoriteThing = prompt("What are your favorite things?", "Cream-colored ponies and crisp apple strudels");
    var listItem = document.createElement("li");
    list.appendChild(listItem);
    var text = document.createTextNode(newItem.value);
    listItem.appendChild(text);

    if (newItem = null) {
        event.preventDefault();
        alert("you must type in a value!");
    }

  }
};
  // when someone clicks the button...

    // http://www.w3schools.com/jsref/met_win_prompt.asp
    // var yourName = prompt("What is your name?");

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

