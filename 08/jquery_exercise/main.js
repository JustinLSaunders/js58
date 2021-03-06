/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(function() {
  var yourName = prompt('What is your name?');

  $('#name').html(yourName);

  var $thingList = $('#fav-list');
  var listItem = $('.fav-thing');
  
  var completeTask = $('<button class="btn">Complete Task</button>');
  completeTask.appendTo(listItem);

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });

  // $("li.button").on("click", addClass("strikethrough");

});

var MyApp = {};

MyApp.addToList = function(list) {
  var completeTask = $('<button class="btn">Complete Task</button>');
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
  completeTask.appendTo($newLi);

}
