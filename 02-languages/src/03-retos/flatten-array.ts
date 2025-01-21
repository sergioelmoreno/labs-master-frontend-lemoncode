type NestedArray = Array<NestedArray | number>;

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// console.log(sample.flat(Infinity));

const flattenArray = (arr: NestedArray) => {
  return arr.reduce((acc: NestedArray, val: NestedArray) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    } else if (val) {
      return acc.concat(val);
    } else {
      return acc;
    }
  }, []);
}

console.log(flattenArray(sample));