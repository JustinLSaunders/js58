var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

function largestValue(array) {
  var sortedList = []; //My instincts tell me to make sortedList = array, but you'll see below why I did not.
  for(var i = 0; i <= array.length - 1; i++){
    sortedList.push(array[i]); //If I declared sortedList = array above and did not take this step, after I run this function, numberList becomes identical to sortedList, and I want it to remain static in global scope for the following functions.
  };
  sortedList.sort((function(a, b){return b - a})); //Without this function, numbers look like strings, and the ascending order (using {return a - b}) is 1, 2, 20, 3, 5, 7, 90. Weird. I have no idea why this works. {return b-a} puts it in descending order.
  // return(sortedList[0]);
  return(sortedList[0]);
};

console.log(largestValue(numberList));

function inArray(array, number){
  for (var i = 0; i < array.length; i++){
    if (array[i] == number){
      return(true);
    }
  }
};
  
if(inArray(numberList, 3)){
  console.log("That number is present.");
} else {
  console.log("Nope. It's not there.")
}
// console.log(numberList[3]);
// console.log(numberList.indexOf(90) % 2 == 0);


function oddPositions(array) {
  var i = 0;
  while(i <= largestValue(array)) {
    if (array.indexOf(i) % 2 == 0) {
      i++;
    } else if ((array.indexOf(i))  % 2 != 0) {
    return(i);
    i++;
    } 
  }
};

console.log(oddPositions(numberList));