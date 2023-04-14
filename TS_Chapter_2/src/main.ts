let myname: string = "Den";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myname = "John";
meaningOfLife = 42;
isLoading = true;
album = 5150;

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(5, +"6"));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
