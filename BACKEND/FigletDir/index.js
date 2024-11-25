// const figlet = require("figlet");


import figlet from "figlet";



figlet("Abhay Verma", function(err,data){
    if (err) {
        console.log("Something went wrong");
        console.dir(err);
        return;
    } else {
        console.log(data);
    }
});


// so always install any lib local 