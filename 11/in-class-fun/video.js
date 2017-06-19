$(function(){
  var videoIds = ['fCWLaAwr3sM', '90ihiTwJPCc', 'RJo13FP4UpI', 'kU3BceoMuaA'];

  $("#random-video-btn").on('click', function(){
    $('#random-video').empty();
    var randIndex = Math.ceil(Math.random() * 100) % videoIds.length;
    var element = $('<iframe height="100%" width="100%" src="https://www.youtube.com/embed/' + videoIds[randIndex] + '" frameborder="0" allowfullscreen></iframe>');

    $("#random-video").append(element);
  });

  $("#add-video").on('click', function(){
    var currentId = $('#random-video-id').val();
    videoIds.push(currentId);
    $("#random-video-id").val("");
    console.log(videoIds);
  })
});