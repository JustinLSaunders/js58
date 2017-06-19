/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a strikethrough decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones
*/

$(function(){
  var $favList = $("#fav-list");
  var $button = $("#new-thing-button");

  $favList.on('click', 'li a.complete', function(){
    $(this).parent().find('span.list-item').css("text-decoration", "line-through");
  });

  $favList.on('click', 'li a.delete', function(){
    $(this).parent().remove();
  })

  // $('#new-thing-button').on('click', function(){
  //   var $newListItem = $('#new-thing').val();
  //   var $addedItem = $('<li class="fav-thing"><span class="list-item">' + $newListItem + '</span> <a class="complete" href="#">Complete</a> <a class="delete" href="#">Delete</a></li>')

  //   $favList.append($addedItem);
  // });

  $('#new-thing').on('keyup', function(event) {
    event.preventDefault();
    if(event.key == "Enter" && $(this).val() != ""){
      var currentValue = $(this).val();
      var listItem = $('<li class="fav-thing"><span class="list-item">' + currentValue + '</span> <a class="complete" href="#">Complete</a> <a class="delete" href="#">Delete</a></li>');
      listItem.appendTo($favList);
      $(this).val('');
    }
  });
})
