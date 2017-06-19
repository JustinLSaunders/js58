function showKitten(){
    console.log("here's a kitten!");
    $('#kitten-img').toggle();
}

$(function(){
    $('#risk-it-btn').on('click', function(){
        var n = 10;
        setTimeout(countDown,1000);

        function countDown(){
            n--;
            if(n > 0){
                setTimeout(countDown,1000);
            }
            // console.log(n);

        }

        var randomCountdown = (Math.floor(Math.random() * n)) * 1000;
        console.log(randomCountdown)
        setTimeout(showKitten, randomCountdown);
    })
});

$(function(){
    $('#kitten-img').on('click', function () {
        $('#kitten-img').toggle(false);
    });
});