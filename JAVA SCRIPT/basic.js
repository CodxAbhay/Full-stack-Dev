

// -------------------------->    loops in js    <------------------------------------

for(let i = 0; i<=10; i++){
    console.log(i);
}


// for of loop :- 
// for(element of collection){
// do somthing
// }


let arr = [1,2,3,4,5];
for(i of arr){
    console.log(i);
}

// for of loop is used for array and string and map and set and etc.
let str = "Abhay";
for(i of str){
    console.log(i);
}


// nested for of loops
let newarr = [[1,2,4,4,6,3],[12,23,54,6,43,23,12]];
for(i of newarr){
    for(j of i){
        console.log(j);
    }
}