console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

// 101 
function biggestWord(phrase: string): string {
  return phrase.split(' ').reduce((acc, current) => acc.length >= current.length ? acc : current)
}
console.log("101 ---> ", biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log("101 ---> ", biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

// 102 

interface Classroom {
  [name: string]: number;
}

const eso2o: Classroom = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const calcAverage = (obj: Classroom) => {
  const total = Object.values(obj).reduce((a, b) => a + b, 0)
  return total / Object.keys(obj).length;
}

function printAverage(classResults: Classroom): string {

  const average: number = calcAverage(classResults);

  switch (true) {
    case average === 10:
      return "Matrícula de Honor";
    case (average < 10 && average >= 9):
      return "Sobresaliente";
    case (average < 9 && average >= 7):
      return "Notable";
    case (average < 7 && average >= 6):
      return "Bien";
    case (average < 6 && average >= 5):
      return "Suficiente";
    case (average < 5 && average >= 4):
      return "Insuficiente";
    default:
      return "Muy deficiente"
  }
}

console.log("102 ---> ", `The average punctuation of the Classroom is ${printAverage(eso2o)} in spanish`)

// 103 

function f(input: any): any {
  var result: any;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

const g = (input: any) => input || input === 0 ? input : (input === null ? "" : "Unknown")

console.log("103 ---> ", g(0.5));
console.log("103 ---> ", g(null));
console.log("103 ---> ", g(undefined));
console.log("103 ---> ", g("Lorem ipsum"));
console.log("103 ---> ", g({ name: "Sergio" }));

// 104
const objA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objB = { name: "Luisa", age: 31, married: true };

// Apartado A

const cloneObj = <A extends object>(source: A): A => source = { ...source };
const clonedObjA = cloneObj(objA);

console.log("104 ---> A ", objA);
console.log("104 ---> B ", clonedObjA);
console.log("104 ---> ", clonedObjA === objA);

// Apartado B

const mergeObj = <A extends object, B extends object>(source: A, target: B): B & A => cloneObj({ ...target, ...source });

const mergedObj = mergeObj(objA, objB);

// {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log("104 ---> ", mergedObj)

// 105

// Apartado A

interface User {
  name: string;
  age: number;
}

const user: User = { name: "María", age: 30 };
const clonedUser: User = { name: "María", age: 30 };

console.log("105 ---> ", user === clonedUser); // false

const isEqual = (a: User, b: User): boolean => {
  for (const prop of Object.keys(a)) {
    if (!b.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

console.log("105 ---> isEqual: ", isEqual(user, clonedUser)); // true

// Apartado B

interface User2 {
  name: string;
  age: number;
  address: {
    city: string;
    code: number;
  };
  friends: string[];
}

const user2: User2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const clonedUser2: User2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const isDeepEqual = (a: User2, b: User2): boolean => {

  for (const prop of Object.keys(a)) {

    if (typeof a[prop] === 'object' && !Array.isArray(a[prop])) {

      for (const innerProp of Object.keys(a[prop])) {
        if (!b[prop].hasOwnProperty(innerProp)) {
          return false;
        }
      }

    }

    if (!b.hasOwnProperty(prop)) return false;

  }

  return true;
}

console.log("105 ---> isDeepEqual: ", isDeepEqual(user2, clonedUser2)); // true

// 106 

interface DicesGameMechanics {
  rollDices: () => void;
  printResults: () => void;
  clearDices: () => void;
}

type Dices = number | undefined;

function play(id: string): DicesGameMechanics {
  let diceOne: Dices = undefined;
  let diceTwo: Dices = undefined;
  return {
    rollDices: () => {
      diceOne = Math.ceil(Math.random() * 6);
      diceTwo = Math.ceil(Math.random() * 6);
    },
    printResults: () => {
      console.log(`106 ---> ${id}  Result: ${diceOne} -- ${diceTwo}`);
      if (diceOne === 6 && diceTwo === 6) console.log(`106 ---> Double 6! Congrats, you win the round!`)
    },
    clearDices: () => {
      diceOne = undefined;
      diceTwo = undefined;
    }
  }
};

const gameOne = play("Game One");
gameOne.rollDices();
gameOne.printResults();
gameOne.clearDices();
const gameTwo = play("Game Two");
gameTwo.rollDices();
gameTwo.printResults();
gameTwo.clearDices();

// 107

// Apartado A

/*

function f() {

  var a;

  function g() {
    return a;
  }

  console.log(a);
  console.log(g());

  a = "good job!";

  console.log(a);

}
    
f();

// undefined
// undefined
// good job
*/



// Apartado B

/*
var a;
a = 1;
var b;

(function() {

  var a;
  var c;  

  console.log(a);
  
  a = 2;
  b = 4;
  c = 3;

})();



console.log(a);
console.log(b);
console.log(c);

// undefined
// 1
// 4
// Uncaught ReferenceError: c is not defined

*/

// Apartado B

/* 

var a;
a = 1;
var b;

function f() {
  var c;
  console.log(a);
  b = 4;
  c = 3;
}
  
f();

console.log(a);
console.log(b);
console.log(c);

*/

// undefined
// 1
// 4
// // Uncaught ReferenceError: c is not defined


// 108

function includes (array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

// Ejemplo:
console.log("108 --->", includes([1, 2, 3], 3)); // true
console.log("108 --->", includes([1, 2, 3], 0)); // false

// 109 

const isPrime = (num: number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const showPrimes = (from: number, to: number): void => {

  if (from > to) [from, to] = [to, from];

  while (from <= to) {
    if (isPrime(from)) console.log(`109 ---> ${from} is PRIME!`)
    else console.log(`109 ---> ${from} is not a prime`)
    from++;
  }
}

showPrimes(100, 1);

// 110

console.log("110 ---> Resolved in ejercicio-04.ts")

// 111

const reverseText = (text: string): string => text.split(" ").reverse().join(" ");

console.log("111 ---> ", reverseText("one two three four"))

// 112 

const subsets = (word: string): string[] => {
  let result = [];

  word.split("").forEach((_letter, index, arr) => {
    result.push(arr.toSpliced(0, index + 1).join(""));
  });

  return result;
}

// TODO: Refactor without the aux array 

const subsetsWithoutArr = (word: string): string[] => word.slice(1).split("").reduce((acc, _, i) => {
  acc.push(word.slice(i + 1));
  return acc;
}, [])

console.log("112 ---> ", subsets("message"))

// 113

// var surname = "Pérez";
// var person = {
//   name: "Juan",
//   surname: "González",
//   wife: {
//     name: "Ana",
//     surname: "Jiménez",
//     getSurname: function () {
//       return this.surname;
//     },
//   },
// };


// 114

interface Video {
  id: number;
  duration: number;
  name: string;
  format: string;
}

function values(obj: Video): any[] {
  let result: any[] = [];
  for (const key in obj) {
    result.push(obj[key])
  }
  return result;
}


// Ejemplo:
console.log("114 ---> ", values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

// 115

const zipObject = (keys: string[], values: string[]): object => {
  let result = {};
  keys.forEach((key, idx) => {
    if (values[idx]) result[key] = values[idx]
  })
  return result
}

// Ejemplo
console.log("115 --->", zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])) // {spanish: "hola"}

// 116

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const enigma = zipObject(cipher.split(""), plain.split(""))

const decrypt = (secret: string): string  => secret.split("").map(char => char === " "  ? " " : enigma[char]).join("");

console.log("115 --->", decrypt(secret));

// 202

