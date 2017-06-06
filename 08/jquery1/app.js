// $(
//   function(){
//     var container = $('div.container');
//     console.log(container)
//   }
// );

var onLoad = function(){
  console.log("Loaded!");
  var container = $('div.container');
  
  var helloText = $('<strong></strong>');
  helloText.text('This page is awesome');
  helloText.appendTo(container);

  $('.container h1').text('My new text');

  console.log($('div.container h1').text()); //This is just looking at the text in the DOM
}

$(onLoad);