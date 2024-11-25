// So basically this index.js file works as a backend
// It will handle all the requests and responses
const express = require('express');
const app = express();  // express will return somthing

console.dir(app);

let port = 8080;
// what is port
// port is the logical end points of a network connection that is used to 
// exchange information between a web server and a web clint


// what app.listen do --
// app.listen is a method that is used to start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});



// What app.use do -->>
// app.use function will do everything -- means it get and post both request will be full filled
// app.use request and send the data to all the path --  and what if we need to send the repons to the specific link 
// then -->> we can use app.get app.post app.put app.delete etc etc

// app.use((req, res) =>{
//     console.log("Request recived")
//     console.log(req);
//     res.send('Hello World');
// });



// what app.get do 
// app.get is a method that is used to handle the get request
// app.get is used to send the data to the specific link
app.get("/", (req, res) =>{
    res.send("In Root or main path ok here main path is avaliable");
})
app.get("/help", (req, res) =>{
    res.send("In Help path");
})
app.get("/submit", (req, res) =>{
    res.send("In submit path");
})
// so the above path is defined to send the data in the specific path -- >>> 
// But what if user entered somthing else in the path then?
// so we will use app.get("*",(req,res))



// app.get("*",(req, res) => {
//     res.send("404 Not Found");
//     res.send("This page does not exist");
// });

// this is the post request with the specific link or path
app.post("/", (req, res) =>{
    res.send("You post a request to the main path");
});




// Use of path parameter
// when we want to send or get respons or  anyhting with multiple path then we will use path parameter
// path parameter is used to get the data from the path
// we will use the colon (:) to define the path parameter
// AND WE HAVE TO USE req.params. to get the data from the path parameter


app.get("/:username/:id", (req, res) =>{
    console.log(req.params);
    console.log("Hello from path parameter");
    res.send(`<h1> Hello ${req.params.username} your id is ${req.params.id} </h1>`);
});
// req.params.username --  is used to get the value of key from username
// req.params.id --  is used to get the value of key from id



// now using the query -- like google and other website
// we can use query parameter to get the data from the user
// we can use req.query to get the data from the user

app.get("/search",(req,res) =>{
    let {q} = req.query;  // we have to make q --  so that we can use search?q= anyhting
    if(!q){
        res.send("Please enter the search query -- with search?q=anyhting you want to search");
    }
    res.send(q);
})