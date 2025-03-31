const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));



app.set("views", path.join(__dirname,"views"));


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Abhay@964826',
});


// this will give us fake data using faker library
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
      
    ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// this value is already entered into tables 
// let users = [["2", "AbhayB", "Babhay@gmail.com", "Abhay@123A"],
//             ["3", "AbhayC", "Cabhay@gmail.com", "Abhay@123B"],
//             ["4", "AbhayD", "Dabhay@gmail.com", "Abhay@123C"]
//             ];


// now using faker we will genrate 100 useres data
// alreday genrated and entered the data so commenting it out
// let data = [];
// for(let i = 1; i<= 100; i++){
//     data.push(getRandomUser());
//     // console.log(data);
// }

// Connect to the database and inserting the values in the tables using the querry
// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }
// // ONCE WE WILL MAKE CONNECTION TO DATA BASE IT DOES NOT CLOSE BY ITSELF SO WE HAVE TO CLOSE USEING:
// connection.end();




app.get("/",(req,res) => {
    let q = `SELECT COUNT(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // res.send(`Total number of users: ${result[0]['COUNT(*)']}`);
            let count = result[0]['COUNT(*)'];
            res.render("home.ejs",{count});
        })
    } catch (error) {
        res.send("Some Error in DB !!");
    }
});


// show root 
app.get("/user",(req,res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("show.ejs",{users});
        })
    } catch (error) {
        res.send("some err in DB");
    }
});


// Edit Route
app.get("/user/:id/edit",(req, res) => {
    let id = req.params.id;
    console.log(id);
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, data) => {
            if (err) throw err;
            let user = data[0];
            console.log(user);
            res.render("edit.ejs",{user});
            });
        }
    catch (error) {
        res.send("some err in DB");
    }            
});

// WHEN USER WILL SUBMIT EDIT THEN WE WILL WILL UPDATE HERE 
app.patch("/user/:id",(req, res) => {
    let id = req.params.id;
    let{password:formpass , username:Newusername} = req.body;
    console.log(id);
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, data) => {
            if (err) throw err;
            let user = data[0];
            if(formpass != user.password){
                res.send("Password is not correct");
            }
            else{
                let q2 = `UPDATE user SET username='${Newusername}' WHERE id='${id}'`;
                try {
                    connection.query(q2, (err, data) => {
                        if (err) throw err;
                        res.redirect("/user");
                        });
                    }
                catch (error) {
                    res.send("some err in DB");
                }
                    
            }
        });
        }
    catch (error) {
        res.send("some err in DB");
    }            
});




app.listen("8080", ()=>{
    console.log("server is running on port 8080");
});