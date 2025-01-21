console.log("************** DELIVERABLE 03 *********************");

// Clone

interface Person {
  age?: number;
  address?: Address;
  country?: string;
  married?: boolean;
  name?: string;
  nickname?: string;
  surname?: string;
}

interface Address {
  city: string;
  country: string;
}

const person: Person = {
  name: "Sergio",
  nickname: "Elmoreno",
  address: {
    city: "Madrid",
    country: "Spain"
  },
}

// via Destructuring

function clone(source: Person): Person {
  const cloned: Person = { ...source };
  return cloned;
}

const clonedPerson = clone(person);

console.log("Clone via Destructuring: ", clonedPerson);

// via Object.assign

const clone2 = (source: Person): {} => Object.assign({}, source);
const clonedPerson2 = clone2(person);

console.log("Clone via Object.assign: ", clonedPerson2);

const cloneRecursive = (obj: Person): Person => {

  if (typeof obj !== "object" || typeof obj === null) return obj;

  let cloned: Person = {};
  for (let key in obj) {
    cloned[key] = cloneRecursive(obj[key]);
  }

  return cloned;
}

const clonedPerson3: Person = cloneRecursive(person);
console.log("Clone recursive: ", clonedPerson3);

// Merge

const a: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: Person = { name: "Luisa", age: 31, married: true };

const merge = (source: Person, target: Person): Person => Object.assign(clone(target), clone(source));


const mergedPerson = merge(a, b);
console.log("Merge via  Object.assign :", mergedPerson);

const merge2 = (source: Person, target: Person): Person => ({ ...target, ...source });

const mergedPerson2 = merge2(a, b)
console.log("Merge via Destructuring :", merge2(a, b));