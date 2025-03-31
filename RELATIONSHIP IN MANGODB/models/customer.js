// in this folder we will learn how to implement one to many  relationship in mongodb

const mongoose = require('mongoose');
const {Schema} = mongoose;


main()
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model('Order', orderSchema);

// commented because we have already added the orders to the database and now we will create Customer schema 
// const addOrder = async () =>{
//     let result = await Order.insertMany([    // inserting multiple orders to the database
//         {item: 'Apple', price: 1},
//         {item: 'Orange', price: 2},
//         {item: 'Banana', price: 3},
//     ]);
//     console.log(result);  // printing a message to the console 
// };
// addOrder();  // calling the addOrder function to add orders to the database


const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,  // this is how we can define a reference to another object in mongodb
            ref: 'Order',  // this is the name of the model we are referencing
        },
    ],
    // orders: [orderSchema], // this is how we can embed the order objects in the customer object
});

const Customer = mongoose.model('Customer', customerSchema);

// in this case we are creating a customer with an order and then we are adding the customer to the database
const addCustomer = async () =>{  
    const customer1 = new Customer({
        name: 'John',
    });
    const order1 = await Order.findOne({item: 'Apple'});  // finding an order object from the database
    const order2 = await Order.findOne({item: 'Orange'});
    customer1.orders.push(order1);  // adding the order object to the orders array of the customer object
    customer1.orders.push(order2);
    
    let result = await customer1.save();  // saving the customer object to the database
    console.log(result);  // printing a message to the console
}
addCustomer();  // calling the addCustomer function to add a customer to the database
// in this schema we have a field called orders which is an array of objects
// this is how we can implement one to many relationship in mongodb
// in this case one customer can have many orders