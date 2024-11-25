// let sum = (a, b) => a + b;
// let Mul = (a, b) => a * b;
// const pi = 3.14;

// // now we use module.export = object so that it can transfer the data into another local file

// let obj = {
//     sum: sum,
//     Mul: Mul,
//     pi: pi
// };

// module.exports = obj;  // this exports the code from this file to another file

// _______________>>>>>>>>>>><>>>>>>>>>>>

// now we will use import export funtion to see how this works 
// but always use only one thing in your project 
// like either use import export or use require, module.exports but dont use both at the same time

export const sum = (a,b) => a+b;
export const Mul = (a,b) => a*b;
export const pi = 3.14;
// here eveything will be export