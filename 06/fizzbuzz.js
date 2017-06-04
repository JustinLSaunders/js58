function fizzbuzz(){
  for(i = 1; i <=100 ; i++){
    if (i % 3 == 0 && i % 5 == 0) {console.log ("FizzBuzz")}
    else if (i % 3 == 0) {console.log("Fizz")}
    else if (i % 5 == 0) {console.log("Buzz")}
    else {console.log(i)};
  }
};
fizzbuzz();

// for(var i = 0; i < 100; i++) {
//   var v = "";
//   v += (i % 3 == 0) ? "Fizz" : "";
//   v += (i % 5 == 0) ? "Buzz" : "";
//   if(v.length == 0) {console.log(i);
//     else console.log(v)};
// };