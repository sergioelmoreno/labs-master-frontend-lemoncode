const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};


const deepGet = (obj: object, ...props: any[]) => {
  if (props.length === 0) return obj;
  return props.reduce((acc, prop) => acc[prop], obj);
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

const myEmptyObject = {};

const deepSet = (val: any, obj: object, ...props: any[]) => {
  if (props.length === 0) return obj;
  props.reduce((acc, prop, idx) => {
    idx === props.length - 1
      ? acc[prop] = val
      : acc[prop] = acc[prop] || {};
    return acc[prop];
  }, obj)
}

deepSet(1, myEmptyObject, "a", "b");
console.log(JSON.stringify(myEmptyObject));  // {a: { b: 1}}
deepSet(2, myEmptyObject, "a", "c");
console.log(JSON.stringify(myEmptyObject));  // {a: { b: 1, c: 2}}
deepSet(3, myEmptyObject, "a");
console.log(JSON.stringify(myEmptyObject));  // {a: 3}
deepSet(4, myEmptyObject);
console.log(JSON.stringify(myEmptyObject));  // Do nothing // {a: 3}