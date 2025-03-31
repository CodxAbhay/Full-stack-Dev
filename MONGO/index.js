const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch(err => console.log(err)
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// Create a schema for the database 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model for the schema
// -- what is a model?
// A model is a class that represents a collection of documents in the database. It's essentially a blueprint for what documents in that collection should look like.

const User = mongoose.model('User', userSchema);



// Create a new user    
// commented this beacuse we have already created this user

// const user1 = new User({name:'Abhay', email: 'vabhay016@gmail.com', age:21});

// user1.save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });


// insertMany() method is used to insert multiple documents into the collection.
// It is used when we want to insert multiple documents at once.
// It returns an array of the inserted documents.

// User.insertMany([
//     {name:'Abhay', email: 'vabhay016@gmail.com', age:21},
//     {name:'Neet', email: 'abc@gmail.com', age:19},
//     {name:'Abhi', email: 'def@gmail.com', age:29}
// ]).then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// }); 


User.updateOne({name:'Abhay'}, {age: 45})
.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});
