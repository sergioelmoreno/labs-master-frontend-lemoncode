// Apartado A

type ExpensiveFunction = () => number;

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

// const memoize = (fn: ExpensiveFunction): ExpensiveFunction => {
  //   let cache: number | undefined;
  //   return function () {
    //     if (cache !== undefined ) return cache;
    //     return cache = fn();
    //   }
    // }
    
// Apartado B
const memoize = (fn: ExpensiveFunction, cache?: number): ExpensiveFunction => () => cache ? cache : cache = fn();

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

// Apartado C
type MemoizedGreet = (repeat: number, text: string) => string;

let count = 0; // Comprobacion de nº de ejecuciones

const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

const memoizeWidthArguments = (fn: MemoizedGreet): MemoizedGreet => {
  
  const cache: { [key: string]: string } = {};
  
  return (repeat: number, text: string) => {
    
    const key = `${repeat}-${text}`;

    if(cache[key]) return cache[key];
    
    return cache[key] = fn(repeat, text);
  }
};

const memoizedGreet = memoizeWidthArguments(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(5, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(5, "chun"));  // chun chun chun
console.log(count);
