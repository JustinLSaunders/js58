var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

function largestValue(array) {
  var sortedList = []; //My instincts tell me to make sortedList = array, but you'll see below why I did not.
  for(var i = 0; i <= array.length - 1; i++){
    sortedList.push(array[i]); //If I declared sortedList = array above and did not take this step, after I run this function, numberList becomes identical to sortedList, and I want it to remain static in global scope for the following functions.
  };
  sortedList.sort((function(a, b){return b - a})); //Without this function, numbers look like strings, and the ascending order (using {return a - b}) is 1, 2, 20, 3, 5, 7, 90. Weird. I have no idea why this works. {return b-a} puts it in descending order.
  return(sortedList[0]);
};

console.log(largestValue(numberList));

function inArray(array, number){
  for (var i = 0; i <= array.length; i++){
    if (array[i] == number){
      return(true);
    }
  }
};
  
if(inArray(numberList, 43)){
  console.log("That number is present.");
} else {
  console.log("Nope. It's not there.")
}


function oddPositions(array) {
  for(var i = 0; i <= largestValue(array); i++) { //Because of the way this iterates through number values, it returns the numbers in the odd positions sorted by value, not sorted by their sequence in the array. It also will not return duplicates, nor an odd-positioned number if it occurs earlier in the array in an even position.
    if (inArray(array, i) && array.indexOf(i) % 2 != 0) {
      console.log(i); //I use console.log instead of return, so I don't short circuit the loop.
    }
  }
};

oddPositions(numberList);

function arraySum(array) {
  var sum = 0;
  var sumArray = [];
  for (var i = 0; i <= array.length - 1; i++){
    if (array.indexOf(array[i]) <= array.length - 1){
      sum = sum + array[i];
      sumArray.push(sum);
    }
  }
  return(sumArray[sumArray.length - 1]);
};

console.log(arraySum(numberList));

function palCheck(string) {

  var userInput = string;
  var i = 0;
  var n = userInput.length - 1;

  while(i <= n) {
    i++;
    n--;
  }

  if(userInput.charAt(i) == userInput.charAt(n)) {
    return(true);
  } else {
    return(false);
  }
}

if(palCheck("8tB505t8")){
  console.log("That is a palindrome.");
} else {
  console.log("Why would you think that's a palindrome?")
}