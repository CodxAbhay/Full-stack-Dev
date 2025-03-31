const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const methodoverride = require('method-override');  // also download npm install method-override
const ExpressError = require('./ExpressError')

app.use(methodoverride('_method'));
app.use(express.urlencoded({ extended: true }));






main()
.then(() =>{
    console.log('MongoDB is connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// const chat1 = new Chat({
//     from: 'Sachin',
//     to: 'Gauri',
//     message: 'Hello ji kya hal hai?',
//     // created_at: new Date()
// });

// chat1.save().then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });



const path = require("path");
app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// home route
app.get('/', (req, res) =>{
    res.send('Hello and welcome to the home page');
});

// all chats route
app.get('/chats', async(req, res) =>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render('index.ejs',{chats});
});

// new chat Get route
app.get('/newchat',(req,res) =>{
    res.render('newchat.ejs');
})

// add chat Post route
app.post('/addchat', async(req,res) =>{
    try{
        console.log(req.body);
        let {from, to , message} = req.body;
        let chat = new Chat({
            from : from,
            to : to,
            message : message,
            created_at : new Date()
        });
        await chat.save();
        res.redirect('/chats');
    }
    catch(err){
        next(err); 
    }
});

// edit chat Get route
app.get('/chats/:id/edit', async(req,res) =>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404, 'Chat Not Found'));
        }
        res.render('editchat.ejs',{chat});

    }catch(err){
        next(err);
    }
    
});

// edit chat Post route
app.put('/chats/:id', async(req,res) =>{
    try{
        let {id} = req.params;
        let {newmessage} = req.body;
        let chat = await Chat.findByIdAndUpdate(id, {message: newmessage}, {runValidators: true, new: true});
        if(!chat){
            next(new ExpressError(404, 'Chat Not Found'));
        }
        console.log(chat);
        res.redirect('/chats'); 
    }
    catch(err){
        next(err);
    }
    
});

// delete chat route
app.delete('/chats/:id', async(req,res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
});



// Error Handling Middleware
app.use((err, req, res, next) =>{
    let {status=500, message="Some error "} = err;
    res.status(status).send({ message });
});

app.listen(8080, () =>{
    console.log('Server is running on port 8080');
});
