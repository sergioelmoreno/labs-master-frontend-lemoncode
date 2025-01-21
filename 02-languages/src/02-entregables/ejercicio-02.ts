console.log("************** DELIVERABLE 02 *********************");

type CustomArr02 = string | number | boolean;

const concat = (a: CustomArr02[], b: CustomArr02[]): CustomArr02[] => [...a, ...b];

console.log("Concat via Destructuring: ", concat(["text", true, 1], [false, "text", 0])); // ["text", true, 1, false, "text", 0]

const concatOptional = (...arrs: CustomArr02[][]) => arrs.flat(Infinity);

console.log("Concat via Rest param & Array.flat(): ", concatOptional(["text", true, 1], [false, "text", 0])); // ["text", true, 1, false, "text", 0]