// here we will create a connection to the database and insert some data to the database for testing purposes

const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
.then(() =>{
    console.log('MongoDB is connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: 'Sachin',
        to: 'Gauri',
        message: 'Hello ji kya hal hai?',
        created_at: new Date()
    },
    {
        from: 'Gauri',
        to: 'Sachin',
        message: 'Hello ji main theek hu, tum batao',
        created_at: new Date()
    },
    {
        from: 'Sachin',
        to: 'Gauri',
        message: 'Main bhi theek hu, kya kar rahi ho?',
        created_at: new Date()
    },
    {
        from: 'Gauri',
        to: 'Sachin',
        message: 'Main bhi kuch nahi, tum batao',
        created_at: new Date()
    },
    {
        from: 'Sachin',
        to: 'Gauri',
        message: 'Main bhi kuch nahi, bas yahi soch raha tha ki tumse baat karu',
        created_at: new Date()
    },
    {
        from: 'Gauri',
        to: 'Sachin',
        message: 'Achha ji, chalo karte hai baat',
        created_at: new Date()
    }
];

Chat.insertMany(chats);