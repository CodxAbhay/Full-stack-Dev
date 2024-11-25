const express = require("express");
const app = express();

const path = require("path");  // requring path so that we can tell the render that out view file is existed where no matter we run our server from anywehere but it will always get to know that wher is views and .ejs file 


const port = 8080;
app.listen(port, (req,res) =>{
    console.log(`Server is running port ${port}`);
});



// here how to set the ejs in view engine using app.set
// what is view engine ?
// view engine is a template engine that is used to render the views in the application.
// it is used to separate the presentation layer from the business logic of the application.
app.set("view engine", "ejs");  // we do not need to require ejs becasue express internaly require the ejs
app.set("views", path.join( __dirname, "/views"));  // here we are telling express that our view file is in views 




// ------------------- SERVING STATIC FILES ------------------------------
// this thing we use when we want to use static html, css, javascript file in the current ejs file
// we use this when we want to use the static file in the current ejs file      
// app.use(express.static("public"));   // public is the folder name where all our static html css is paresnt -- but if we want to use this outside from this folder then we can't use it >> That's why now we will use path.join(__dirname)
app.use(express.static(path.join(__dirname, "/public/css")));  // here we are telling express that  our static file is in public folder and we want to use it in our current ejs file [so using this line we can run our server from parent dicrotry]
app.use(express.static(path.join(__dirname, "/public/javascript")));  // so when we have sub folder in the public folder then we can use that in this wat -- /public/css

// now we just need to go in the .ejs file and link static css , javascript file -- which will apply in all the dynimic page
// -- we can also use the static file in the dynamic page by using the express.static("public") method 





app.get("/", (req,res) =>{
    // res.send("This is home Baby!");
    res.render("home.ejs");
})

// what is the use of res.render
// so when you you want to send a multiple line of code of html or somthing elese then you just can't write everything is the res.send 
// so here we use render to send the complete html file or somthing  






// ------------------------------------------------------------------------------------------


// second part --
// what is interpolation syntax.
// so in this we can embed the complete html code with js
// THIS WAY WE CAN MAKE DYNIMIC HTML PAGES 



//                                               TAGS
//      <%      'Scriptlet' tag, for control-flow, no output
//      <%_     ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
//      <%=     Outputs the value into the template (HTML escaped)
//      <%-     Outputs the unescaped value into the template
//      <%#     Comment tag, no execution, no output
//      <%%     Outputs a literal '<%'
//      %>      Plain ending tag
//      -%>     Trim-mode ('newline slurp') tag, trims following newline
//      _%>     ‘Whitespace Slurping’ ending tag, removes all whitespace after it




// now passing the data into EJS

app.get("/rolldice", (req, res) =>{
    const diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
    // now render will search for views named folder and search for rolldice.ejs file
    // here we are passing the num variable to the rolldice.ejs file
})


app.get("/ig/:username", (req,res) =>{
    // const follower = ["Abhay", "Neetu","Abhishek","Ankit"];
    // now require the data from database -- but we don't have any database till now so we will require our json data file where all of our data is stored
    const instadata = require("./data.json");
    const {username} = req.params;
    const data = instadata[username]
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.status(404).send("User not found");
    }
})