let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("Button clicked");
    alert("Button clicked");
}

btn.onmouseenter = (function(){
    console.log("Mouse entered");
});




// Event listerner 
// why we need event listner -- SO when we need to use multiple event to perform on anything then we use event listner because it manages everything 
// event listner is a function that is called when an event occurs
// event listner -- element.addEventListener("event", callBack)   --> callBack is a function which goes as argument in other function
 

let btns = document.querySelectorAll("button");

for (bt of btns){
    bt.addEventListener("click",sayhello);
    bt.addEventListener("dblclick",SayAlert);
    // bt.addEventListener("mouseenter",GoodBye);
    bt.addEventListener("dblclick",function(){
        console.log("YOu Double clicked");
    })
}
function sayhello(){
    console.log("Hello");
}

function SayAlert(){
    console.log("Somthing big ig going to happen");
}

function GoodBye(){
    alert("Can you click On Button LOL");
}

