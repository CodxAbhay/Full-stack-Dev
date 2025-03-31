// in this folder we will learn how to implement one to (few)[many ka ek part] relationship in mongodb


const mongoose = require('mongoose');
const{schema} = mongoose;



main()
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            _id: false, // this is how we can disable the generation of _id field for the address object
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model('User', userSchema);

// in this schema we have a field called addresses which is an array of objects
// this is how we can implement one to many relationship in mongodb
// in this case one user can have many addresses
// we can add as many addresses as we want to the user object


const addUser = async () => {
    const user = new User({
        username: 'John Doe',
        addresses: [
            {
                location: '123 Main St',
                city: 'New York',
            },
            {
                location: '456 Park Ave',
                city: 'Los Angeles',
            },
        ],
    });
    await user.save();  // saving the user object to the database
    console.log('User added');  // printing a message to the console
};

addUser();  // calling the addUser function to add a user to the database
