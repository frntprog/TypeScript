type One = string;
type Two = string | number;
type Three = "hello";

//conver to more or less specific
let a: One = "hello";
let b = a as Two;
