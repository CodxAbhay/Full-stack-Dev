let btn = document.querySelector("button");

let im = document.querySelector("img");

let url = "https://dog.ceo/api/breeds/image/random";

async function GetImg(){
    let response = await fetch(url);
    let data = await response.json();
    im.src = data.message;
}

btn.addEventListener("click", function() {
    GetImg();
});