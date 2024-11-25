let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    console.log("hi");
    let li = document.createElement("li");
    li.innerText = inp.value;
    // here we append the li in ul as a child 
    ul.appendChild(li);
    // inp.value = "" makes the text clear 
    inp.value = "";

    // deleting the task
    let dl = document.createElement("button");
    // here we appending the delete button inside the list 
    li.appendChild(dl);
    dl.innerText = "❌";

    // this event listener will not work if we will use outside of the parent eventListener
    // BUT THIS WILL WORK INSIDE THE btn EVENTLISTENER -->> BUT IF WE WANT TO WORK THIS OUTSIDE THEN?
    // dl.addEventListener("click", function(){
    //     li.remove();
    // });
});


// if we want that our delete event listener will work outside the btn 
// eventListener for all the newely created delete button then we will use the concept of bubling

// we will use the parent eventListener -->> and then we will use the event.target.nodeName to get the NodeName if nodename == BUTTON 
// then we will delete the li element

// using parent event listner then event.target to reach the button
// what event.target do GO on MDN AND STUDY 

ul.addEventListener("click" , function(event){  // NOW THIS WILL WORK FOR ALL 
    if(event.target.nodeName == "BUTTON"){
        event.target.parentNode.remove();
    }
})

