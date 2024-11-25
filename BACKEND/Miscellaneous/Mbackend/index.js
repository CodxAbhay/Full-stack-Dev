const express = require("Express");
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});


// TO get data from the POST method --
// 1. set up POST REQUEST route to get some respons 
// 2. prase POST request data


app.use(express.urlencoded({extended: true}));   // now this line will read the data which is comming in the post mehtod through url in body: 
// if we want to send the data in the form of json format in post method then we can use this to extract the data
app.use(express.json());


app.get("/register", (req,res) =>{
    // in get request all the data comes in the query method 
    // and we can get that data using req.querry
    let {name, password} = req.query;
    res.send(`Data is submited - [GET respons]  name is:  ${name} and Your pass is ${password}`);
});

app.post("/register", (req,res) =>{
    // we can use req.body after 2 step define upper
    let {name, password} = req.body;
    res.send(`Data is submited - POST respons ${name} and Your pass is ${password}`);

    // so the data is sent form the from  - does not come in the query from 
    // it comes in request body
    // so we handle post request in 2 step 
    // app.use(express.urlencoded({extended: true}));
    // app.use(express.json());
});