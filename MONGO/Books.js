const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch(err => console.log(err)
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    price:{
        type: Number,
        min: [1 , 'Price must be greater than 1']
    },
    category:{
        type: String,
        enum: ['Fiction', 'Non-Fiction']
    }
});

const Book = mongoose.model('Book', bookSchema);


// const book1 = new Book({
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     price: 20.99
// });

// book1.save()
// .then( res =>{
//     console.log(res);
// })
// .catch(err =>{
//     console.log(err);
// });

const book2 = new Book({
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 15.99,               // if you set price less than 1 then it will give an error
    category: 'Fiction',     // if you set category other than Fiction or Non-Fiction then it will give an error 
});

book2.save()
.then( res =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
});