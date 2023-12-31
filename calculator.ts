type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculate('add', 10, 10));
console.log(calculate('subtract', 10, 10));
console.log(calculate('multiply', 10, 10));
console.log(calculate('divide', 10, 10));
console.log(calculate('remainder', 10, 10));
