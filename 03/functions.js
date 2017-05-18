function foo() {
  console.log("Hello");
}

foo();

// declare a function called bar with a parameter called name
function bar(name) {
  console.log("Hello " + name);
}

// call the function named 'bar' with an argument 'Glen' (string)
bar("Glen");


function sum(a, b) {
  console.log(a + b);
}

sum(4, 9);

function yellSomething(something) {
  return "asdf"; //this line short circuits the function and the next line will not return.
  return something.toUpperCase();
}

var chicken = yellSomething("glennn");
console.log(chicken);
