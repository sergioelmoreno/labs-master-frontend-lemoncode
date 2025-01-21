type Values = number | string | object | [];

type Tree<T> = {
  [key: string]: T | Tree<T>;  
};

const tree: Tree<Values> = {
  one: {
    two: [
      {three: 3},
      {
        four: {
          five: 5,
        }
      }
    ],
  }
}