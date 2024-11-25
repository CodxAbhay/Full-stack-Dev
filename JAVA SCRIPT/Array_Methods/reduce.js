// reduce function
// it reduce the function into single arr
// res is num initialy and return the value in the res after each iteration

let arr = [1,2,3,4];

let sum = arr.reduce(function(res, el){
    return el + res;
})
console.log(sum);


// find maximum in arr 

let maxi = arr.reduce(function(max, el){
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(maxi);

// concept of spred
// using ...arr it will paas each value like an single element
console.log(Math.min(...arr));

// make a new copy 
let newarr = [...arr];
console.log(newarr);