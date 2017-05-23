var sum0 = 0;
var n = 0;
while (n < 1000) {
  sum0 += validSum(n);
  n++;
}

// function isValid(number) { 
//   var sum0 = 0;
//   if (number % 3 == 0 || number % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function validSum(number) {
  if(number % 3 == 0 || number % 5 == 0) { //or if (isValid(number)) 
    return number;
  } else {
    return 0;
  }
}

console.log(sum0);

var sum = 0;
for(var i = 0; i < 1000; i ++) {
  if ((i % 3 == 0) || (i % 5 == 0)) {
    sum = sum + i; //or sum += i;
  } 
}
console.log(sum);

var sum2 = 0;
var n = 0;
while(n < 1000){
  if(n % 3 == 0 || n % 5 == 0) {
    sum2 += n; //or sum2 = sum2 + n;
  }
  n++;
}
console.log(sum2);