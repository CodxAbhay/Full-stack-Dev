// function defination with arguments

function add(a, b) {
    return a + b;
}

// how to call function 
console.log(add(5, 7)); // output: 12 

// create a function to roll a dice and always display the value of the dice (1 to 6)
function rollDice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("The dice up value is:",dice);
}

rollDice();


// function with unlimeted arguments
function sumAll(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9)); 



