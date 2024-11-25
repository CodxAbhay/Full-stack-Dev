let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();

    }
});


function ButtonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    // userseq = [] is doing becuse we want after a suceesfull guess  user need to enter every color from the start
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // first choose a randome button then use the flash 
    let randIndex = Math.floor(Math.random()*3);
    // geting the class name then we will get that class div
    let randclass = btns[randIndex];
    let randBtn = document.querySelector(`.${randclass}`);
    // now we will pass the randome class in the flash function to flash that div
    ButtonFlash(randBtn);
    // also now we will add the the genrated color in the gameSeq 
    gameSeq.push(randclass);
    console.log(gameSeq);
} 

function checkAns(idx){
    // here we will we check the current lavel color if they matches that mean we are correct 
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500)
        }
        
    }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> Press any Key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resetGame();
    }


}

// this is user press btn it will track of user pressed button
function btnPress(){
    // we will get the class name of the button that was pressed
    let btn = this;
    ButtonFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
// we will add event listener to all the buttons
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}



// now after game over reset the game so that it can start again 
function resetGame(){
    // we will reset the game by removing all the event listener from the buttons
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
