// making an object litlerals for twitter

const post = {
    username:"abhay",
    content:"This is my first post",
    likes:199,
    shares:10,
    comments:5,
    hashtags:["python","javascript","react"],
    date:"2022-01-01",
    tags:["@abhi","@neetu"]
};

console.log(post)
// how to acces data
console.log(post.username);
console.log(post.content);
// how to add data
console.log(post.likes = 200);
// how to delete data
console.log(delete post.username);
// how to update data
console.log(post.username = "abhay123");
// how to add new data
console.log(post.newkey = "newvalue");



// to print randome number 
// multiply with the number till you want to get the randome number 
// like multipy with 10 means 0 to 9 and if we add +1 then it will give randome between 0 to 10
// of we use Math.flor then we will get intergers
let x = Math.floor(Math.random()*10);
console.log(x);
