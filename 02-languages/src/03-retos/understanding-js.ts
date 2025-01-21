// Cuestión 1
const x = NaN;

console.log(x === x); // false

// Cuestión 2

const isNaNValue1 = v => isNaN(v);

console.log(isNaNValue1(NaN)); // true

// Cuestión 3

const isNaNValue2 = v => isNaN(v);

const y = NaN;

console.log(!isNaNValue2(y) && y !== y); // false

// Cuestión 4

const z = Infinity

console.log(z + 1 === z - 1); // true

// Cuestión 5
// TODO:
// const x = ¿?

// console.log(x > x); // true
