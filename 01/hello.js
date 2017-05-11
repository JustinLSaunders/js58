// var age = 38;

// if(age >= 21) {
//     console.log("You may legally have a drink");
//     if(age < 25) {
//     console.log("You probably Jaeger");
//   }
//   if (age >= 25 && age < 60) {
//     console.log("You want an old fashioned");
//   }

//   if (age >= 60) {
//     console.log("You want a brandy");
//   }
// }

var counter = 0;

while(counter < 10) {
  console.log("Woo hoo!" + counter);

  if(counter % 3 == 0) {
    console.log("Woo hoo!" + counter);
    break;
  }

  counter ++;
}