console.log("************** DELIVERABLE 01 *********************");

type CustomArr01 = string | number;
const randomArr: CustomArr01[] = ["lorem", "ipsum", "dolor", 9, 3]

// Head
const head = (arr: CustomArr01[]): CustomArr01 => {
  const [first] = [...arr];
  return first;
};

console.log("Head: ", head(randomArr)) // lorem

// Tail
const tail = ([_first, ...arr]: CustomArr01[]): CustomArr01[] => arr;

console.log("Tail: ", tail(randomArr)) //["ipsum", "dolor", 9, 3]

// Init
const init = (arr: CustomArr01[]): CustomArr01[] => arr.slice(0, -1);

console.log("Init: ", init(randomArr)) //["lorem", "ipsum", "dolor", 9]

// Last
const last = (arr: CustomArr01[]): CustomArr01 => arr[arr.length - 1];

console.log("Last: ", last(randomArr)) // 3