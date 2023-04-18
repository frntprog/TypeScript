"use strict";
let stringArr = ["one", "hey", "Den"];
let guitars = ["Strat", "Les Paul", 5150];
let mixData = ["EVH", 1984, true];
stringArr[0] = "Den";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
// guitars = stringArr;
// guitars = mixData;
let postId;
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 42;
//Objects
let myObj;
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
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["1", "2", "4"],
};
// evh = jp;
const greetGuitarist = (guitarist) => {
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
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
