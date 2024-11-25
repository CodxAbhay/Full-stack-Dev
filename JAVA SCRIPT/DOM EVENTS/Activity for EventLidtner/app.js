let btns = document.querySelector("button");
let dive = document.querySelector("div");
let heading = document.querySelector("h2");

btns.addEventListener("click", genrateColor);


function genrateColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`
    dive.style.backgroundColor = color;
    heading.innerHTML = `The RGB Value of the Color is : ${r}, ${g}, ${b}`;

}

function PrintRGB(){

}