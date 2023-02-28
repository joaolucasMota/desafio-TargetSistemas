let num = parseInt(prompt("Digite um número: "));

let fib1 = 0;
let fib2 = 1;
let fib = 0;

while (fib < num) {
  fib = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib;
}

if (fib === num) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}
