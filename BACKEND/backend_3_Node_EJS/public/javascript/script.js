const btns = document.querySelectorAll("button");


for(btn of btns){
    btn.addEventListener("click", () =>{
        this.btn.innerText = "MESSAGE SENT";
    });
}