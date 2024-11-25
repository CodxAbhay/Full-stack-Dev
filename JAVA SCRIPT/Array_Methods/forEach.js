// forEach function : this will go on each value in the array

let arr = [1,2,3,4];

function print(el){
    console.log(el);
}

arr.forEach(print);

// OR 
// we can use arrow function to make it more concise
arr.forEach(el => {
    console.log(el)
});

// we can use for each function for our objects also
// forEach function : this will go on each value in the object

let obj = [{
    name: 'John',
    age: 25 },
    {
    name: 'Jane',
    age: 30},
    {
    name: 'Jack',
    age: 35}
]
// here we are printing the object using for each
obj.forEach(object => console.log(object))

// now print the object age usnig for each function:

obj.forEach(object => console.log(object.age));

