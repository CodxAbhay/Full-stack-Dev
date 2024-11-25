
// this is very similar to for each function BUT the main difference is : it store all the answer in a new array
// FUNCTION DIFINATION:
// let newArr = arr.map(function difination or Function name);  // you can pass any function name or direct make function inside  map

// let newArr = arr.map(function (item) { return item * 2 }); // this is
// let newArr = arr.map((item) => item * 2); // this is arrow function


let arr = [1,2,3,4];

let newArr = arr.map(function(el){
    return el * 2; // this is very imortant that you return in the last to store the answer in the nreArr
})
console.log(newArr); // [2,4,6,8]   here each value is multiply by 2;


let students = [
    {
    name: 'John',
    marks: 75 },
    {
    name: 'Jane',
    marks: 80},
    {
    name: 'Jack',
    marks: 95}
]

let cgpa = students.map(function(el){
    return el.marks/10;
})
console.log(cgpa); // [7.5,8,9.5]  


// filter function
// this function is used to filter the array and return the new array with the condition

// FUNCTION DIFINATION:
// let newArr = arr.filter(function difination or Function name);  // you can pass any function name or direct make function inside  filter

let nums = [1,2,3,4,5,6,6,7,8,9,0,10,11,12,13,22,44];

let even = nums.filter(function(el){
    return el % 2 == 0; // this will make an arry which is containing only even nums
});
console.log(even);


// every element
// it will return true if all the element will satisfy the condtion given by the function else it will retrun false
// it is like && logical and
let arr1 = [1,3,5,7,9].every(function(el){
    return el % 2 != 0;
});
console.log(arr1);

