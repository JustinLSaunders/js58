var fibonacci = [1, 2];
for(i = 0; i < 4000000; i++) {
  i = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(i);
}
console.log(fibonacci);