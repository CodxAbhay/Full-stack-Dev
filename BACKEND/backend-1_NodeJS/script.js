console.log("Hello world");

// process.argv
// process.argv is an array that contains the command line arguments passed to the Node.js process.

let arg = process.argv;
for(let i = 2; i<arg.length; i++){   // starting at i = 2 to skip first 2 pre difined 
    console.log("Hello to",arg[i]);
}

// now we learn what is module.export and require
// module.export
// module.export is used to export a module in Node.js. It is used to make a module available for use in other parts of the application.

// to import the data means all code in this file we will use require mehtod
// require is used to import a module in Node.js. It is used to make a module available for use in other parts of the application.

// // but both file must be in same dircotory
// let math = require("./Maths");
// console.log(math);
// console.log(math.sum(1,2));
// console.log(math.Mul(1,2));
// console.log(math.pi)


// _____________________>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// now we will use import module to import the values or code from the maths.js file

import {sum, Mul,pi} from "./Maths.js"

console.log(sum(1,4));  // to use the import module first we need to npm init to make pacakege.json
console.log(pi);

// NOTE : IN package>josn WE HAVE TO DEFINE -- "type": "module"
 
// why and how to add packege.json file in the same diroctory
// package.json is a file that contains metadata for a project in Node.js. It is used to
// specify the dependencies of a project, as well as other metadata such as the project's name and
// version.
// to add package.json file in the same directory we will use npm init command in terminal
// npm init -y
// npm init -y is used to create a package.json file in the current directory. The -
// y flag is used to answer yes to all questions, so that the file is created without any
// prompts.
// but you can use it without typing -y

