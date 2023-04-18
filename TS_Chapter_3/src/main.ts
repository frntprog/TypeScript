let stringArr = ["one", "hey", "Den"];

let guitars = ["Strat", "Les Paul", 5150];

let mixData = ["EVH", 1984, true];

stringArr[0] = "Den";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

// guitars = stringArr;
// guitars = mixData;

let postId: string | number;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

//Objects
let myObj: object;
// let myObj: {}; - same as above
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Den",
  prop2: true,
};

exampleObj.prop1 = "John";

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["1", "2", "4"],
};

// evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  // narrowing
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";

  // return `Hello ${guitarist.name?.toUpperCase()}!`;
};

console.log(greetGuitarist(jp));

// Enums
// Unlike most TypeScript features, this is not a type-level
// addition to JavaScript but something added to the language and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
