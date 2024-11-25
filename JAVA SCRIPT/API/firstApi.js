let joke = document.querySelector("p");
let btn = document.querySelector("button");
// this is the link of a API in which a randome fact about CAt's are given 
let url = "https://catfact.ninja/fact";

// fetch mean kuch le ke aana with the given URL
// sending the request 
fetch(url)  // fetch return a promis
.then((res) =>{
    console.log(res);
    // now to read data from API 
    return res.json();
})
// then getting the respons (means data)
// now if res.json() will return any data (means Joke) then it will be printed otherwise catch block excute
.then((data) =>{
    console.log(data.fact);
    //using data.fact we can print the raw data
    // joke.innerText = data.fact;
    // now method chaining:
    fetch(url)  // send the request
    .then((res) =>{
        return res.json();  // catch the respons
    }).then((data2) =>{
        console.log(data2.fact);  // after catching print the data
        // joke.innerText = data2.fact;
    })
})
.catch((err) =>{
    console.log("Some Error with API");
    console.log(err);
});




// Api works Asyncronous -- it means java Script will not wait for API to get exucuted
// it means it will excute the rest of the code till API request is pending 
// and when the API request full-fill then it will excute the API

console.log(3);

// so here the js code first print the value 3 then it will print the rest of the api fact 
/// it means js code did not wait for the api to get the data then i will fist work on api then i will move to the next call;
// it simply moved to the rest of the js code then when api returned the value it print them also;
// so it is called asyncronous programming




// NOW WE WILL USE async AND await ON THE FTECH FUCNTION TO MAKE IT MORE READABLE
// async and await is used to make the code more readable and to avoid the callback hell

async function getFacts(){
    // so we know that this is a asyncronous call so it will not wait for this fetch to be exucuted 
    //  so for waiting that first this function should wait then excute the next line  -- we will use await
    let res = await fetch(url);
    let data = await res.json();
    
    // first res will excute then the next line will excute
    console.log(data.fact)
}


// next thig is : Use >> axios 
// in axios we don't need to call res.json to get the respons from the server 
// we can directly call the data from the axios call
// axios is a promise based HTTP client for the browser and node.js
// it is a library that makes it easy to send HTTP requests from your code
// BUT FIRST WE HAVE TO INSTALL (axios or copy the mdn script code and psste it in html file)

async function GetFacts() {
    try{
        let res = await axios.get(url);
        joke.innerText = res.data.fact;
    }
    catch (error) {
        console.log("error - : ",error);
    }
}

btn.addEventListener("click",GetFacts);