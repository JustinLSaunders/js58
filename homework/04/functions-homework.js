var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

function largestValue(array) {
  var sortedList = []; //My instincts tell me to make sortedList = array, but you'll see below why I did not.
  for(i = 0; i <= array.length - 1; i++){
    sortedList.push(array[i]); //If I declared sortedList = array above and did not take this step, after I run this function, numberList becomes identical to sortedList, and I want it to remain static in global scope for the following functions.
  };
  sortedList.sort((function(a, b){return b-a})); //Without this function, numbers look like strings, and the ascending order (using {return a-b}) is 1, 2, 20, 3, 5, 7, 90. Weird. I have no idea why this works. {return b-a} puts it in descending order.
  // return(sortedList[0]);
  return(sortedList[0]);
};

console.log(largestValue(numberList));
console.log(numberList);

// function inArray(array, number) {
//   for (i = 0; i <= numberList.length - 1; i++){
//     if (numberList[i] == number) {
//       console.log(number + " is present.");
//     } else {
//       console.log(number + " is not present.");
//     }
//   }
// };

// inArray(12);

// function inArray(array, number){

// }

// if(inArray(numberList, 3)){
//   console.log(number + " is present!");
// }

// function oddPosition() {
//   for(var i = 0; i <= (numberList.length - 1); i++) {
//     if (numberList.indexOf[i] % 2 == 0) {
//       return(false);
//     } else {
//       // return(numberList[i]);
//       console.log(numberList[i]);
//     }
//   }
// };

// oddPosition();