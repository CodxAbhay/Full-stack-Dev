const express = require("express");
const app = express();
const port = 8080;

// importing uuid for unique id given to each post
const {v4: uuidv4} = require('uuid');


// using method-override so that we can use patch in our html form 
const methodOverride = require('method-override')   // so in this line we require the mehtod-override module
app.use(methodOverride('_method'));   // and in this line we are telling our express that we are using method-override
// and if express see any link having _method then it simply see the _method=delete/patch/etc.



// making express to understand the data comming from url in post method
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// now to use views and public we need to require path
const path = require("path");
app.set("view engine", "ejs");
// now set the path for views
app.set("views",path.join(__dirname,"views"));

// setting the path for the public folder 
// which is a static file(html,css,javascript) for the ejs file 
app.use(express.static(path.join(__dirname,"public")));



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});



let posts = [
    {
        id:uuidv4(),
        username: "Abhay Verma",
        content: "I am a enginer. I write code"
    },
    {
        id:uuidv4(),
        username: "Neetu Verma",
        content: "I am a doctor. I love to save lives"
    },
    {
        id:uuidv4(),
        username: "Ankit singh",
        content: "I do nothing. This is my hobby"
    },
];

// this is universal get method -- it means it will show all the post which is being posted on the page
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});


app.post("/posts",(req,res)=>{
    let id = uuidv4();
    let {username,content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts"); // this will again call the get request to the /posts 
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find(post => post.id == id);
    res.render("show.ejs",{post});
})

// now we are going to use patch for changing the specific id post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find(post => post.id == id);
    post.content = newcontent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find(post => post.id == id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res) =>{
    let {id} = req.params;
    let index = posts.findIndex(post => post.id == id);
    posts.splice(index,1);
    res.redirect("/posts");
})