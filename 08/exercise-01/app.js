$(function(){
  var container = $('div.container');
  console.log(container);
  var counter = 0;
  var body = $('body');

  $('a').click(function(event){
    counter++;
    event.preventDefault();

    $(this).text("You clicked me " + counter + " times.");
  });

  var clickDiv = $('div.button'); 

  $(clickDiv).on('click', function(clickHere){
    $(this).text("You Clicked Me!");
    $("body").css("background-color", "purple");
  });
  
  $(clickDiv).on('dblclick', function(clickHere){
    $(this).text("You Clicked Me!");
    $("body").addClass("orange");
  });
});


// $("button").click(function(){
//     $("body").addClass("blue");
// });



// var onLoad = function(){
//   var container = $('div.container');
//   console.log(container);
//   container.hide(700);
// };

// $(onLoad);