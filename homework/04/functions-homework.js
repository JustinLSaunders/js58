var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
var sortedList = []; //My instincts tell me to make sortedList = numberList, but you'll see below why I did not.

function largestValue() {
  for(i = 0; i <= numberList.length - 1; i++){
    sortedList.push(numberList[i]); //If I declared sortedList = numberList above and did not take this step, after I run this function, numberList becomes identical to sortedList, and I want it to remain static in global scope for the following functions.
  };
  sortedList.sort((function(a, b){return b-a})); //Without this function, numbers look like strings, and the order is 1, 2, 20, 3, 5, 7, 90. Weird. I have no idea why this works. {return b-a} puts it in descending order.
  return(sortedList[0]);
};

largestValue();
console.log(sortedList[0]);
console.log(numberList);
console.log(sortedList);

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