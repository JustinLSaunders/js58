$(function(){
  var $favList = $('#fav-list');

  $favList.on('mouseenter', 'li', function(e){
    // console.log("mouse probe");
    // console.log(e.target);
    // console.log(e);
    $(this).addClass('hover');
  })
  // $favList.on('mouseleave', 'li.chicken', function(e){
  $favList.on('click', 'li a', function(e){
  // $('#fav-list li a').on('click', function(e){
    $(this).removeClass('hover');
    // $(this).parent().remove();
    // $(this).parent().siblings().remove();
    // $(this).parent().css("text-decoration", "line-through");
    $(this).parent().siblings().find('span').css("text-decoration", "line-through");


  })

  var $elem = $('<li><a href="#">Hurfdurf</a></li>');
  $favList.append($elem)

})