"use strict";
//convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "wordl";
let e = "wordl";
const addorConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addorConcat(2, 2, "concat");
//Be careful! TS sees no problem - but a STRING is returned
let nextVal = addorConcat(2, 2, "concat");
// 10 as string
// overrool type by double assertion
10;
// The DOM
// None null assortion (!)
const img = document.querySelector("img");
// None null assortion (!) instead of (as HTMLImageElement)
const myImg = document.getElementById("#img");
// Wont work in tsx for React
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
