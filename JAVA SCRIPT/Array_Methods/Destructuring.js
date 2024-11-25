// using Destructuring we can make multiple variable and assign the value in them with some prediined array


let arr = ["abhay","neetu","abhi","puchki", "papa", "mummy","didi"];
let [Engineer, Doctor, name, cute_name] = arr;  // here each variable have got the value by one by one from the main array
console.log(Engineer,Doctor,name,cute_name);
// output: abhay neetu abhi puchki

// we can also use the rest operator to assign the remaining value in the array to the variable
let [Me, Doc, ...other] = arr;
console.log(other); // output: ["neetu", "abhi", "puchki"]



// using this in object
let obj = {
    name: "abhay",
    age: 20,
    city: "delhi",
    country: "india"
}

// here  we will use (:) to mark a variable with the given key

let {name: naam, age: umar, city, country} = obj;
console.log(naam,umar,city,country); // output: abhay 20 delhi india

// we can also use the rest operator to assign the remaining value in the object to the variable
let {name: nam, age, ...others} = obj;
console.log(others); // output: { city: 'delhi', country: 'india
    