function launchOne () {
  console.log("Launched a rocket");
}

function launchTwo(){
  console.log("Launched another rocket");
};

function rocketLaunch(launchFn){
  for (i = 10; i > 0; i--){
    console.log(i + "...");
  }

  // launchFn();
}

// rocketLaunch(launchOne)
// rocketLaunch(launchTwo);

// setTimeout(launchOne, 5000);

// setTimeout(function(){
//   rocketLaunch(launchOne);
// }, 5000);

// setInterval(function(){
//   rocketLaunch(launchOne);
// }, 1000);

// jQuery might look something like this:
function on(eventType, callbackFn){
  if(eventType == 'click') {
    callbackFn();
  }
}

on('click', function(){
  console.log("you clicked");
})