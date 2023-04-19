type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"wordl";
let e = <string | number>"wordl";

const addorConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addorConcat(2, 2, "concat") as string;

//Be careful! TS sees no problem - but a STRING is returned
let nextVal: number = addorConcat(2, 2, "concat") as number;

// 10 as string
// overrool type by double assertion
10 as unknown as string;

// The DOM
// None null assortion (!)
const img = document.querySelector("img")!;
// None null assortion (!) instead of (as HTMLImageElement)
const myImg = document.getElementById("#img")! as HTMLImageElement;
// Wont work in tsx for React
const nextImg = <HTMLImageElement>document.getElementById("#img")!;

img.src;
myImg.src;
