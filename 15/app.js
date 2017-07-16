// replace this entire code block with the config found in the firebase dashboard
// for your created database
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHrJykzv5NEs3iTUfXzG277MZnISIBg3A",
    authDomain: "super-duper-78bc0.firebaseapp.com",
    databaseURL: "https://super-duper-78bc0.firebaseio.com",
    projectId: "super-duper-78bc0",
    storageBucket: "super-duper-78bc0.appspot.com",
    messagingSenderId: "253476022698"
  };
  
  firebase.initializeApp(config);
 
// Get a reference to the database service
var database = firebase.database();

$(function(){
  $("#add-button").on('click', function(){
    var value = $('#new-item').val();

    // grab a reference to the "todo-items" key in firebase
    // and then create a new item that we set data on
    var item = database.ref("/todo-items").push();
    item.set( { value: value, chicken: "chicken" } )
  })

  // grab a reference to the todo-items key and ...
  database.ref("/todo-items").on("value", function(snapshot){
    var list = $('#list-items');
    list.empty();
    console.log(snapshot.val());

    snapshot.forEach(function(listItem){
      var item = listItem.description.val().value;
      list.append('<li data-id="' + listItem.key +'">' + item + ' <a href="#" class="remove">Remove</a></li>');
    })
  })

  // add an event listener for every a tag inside of a li tag in our list
  $('#list-items').on('click', 'li a', function(){
    // retrieve the value of the 'data-id' attribute on the parent <li> element
    // so we can remove it from firebase
    var itemId = $(this).parent().data('id');
    database.ref("/todo-items/" + itemId).remove();
  });
})