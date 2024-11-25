// there are many selecter in java script for example 
// document.getElementById() , document.getElementByClassName(), getElementByTagName()

let images = document.getElementsByClassName("oldImg");
for (let i = 0; i < images.length; i++) {
    console.dir(images[i]);
    // images[i].src = "assets/spiderman_img.png";
    // console.log(`value of image number ${i} is changed`);

}

// ________________________________________________________________________________________

// ----------------------- query Selecter ---------------------------
// document.querySelector() , document.querySelectorAll()
// document.getElementById() is used to select a single element by id
// document.querySelector() is used to select a single element by css selector

// document.querySelectorAll() is used to select all elements by css selector

// this is just like selectig in css 

console.log(document.querySelector("h1"));
// this will select the element with html tag

console.log(document.querySelector("#description"));
// this will select the element with id  

console.log(document.querySelector(".oldImg")); // this will select only first object in the class

// this will select all elements with class name
console.log(document.querySelectorAll("p"));



// ________________________________________________________________________________________


// to see the text written in any paragraph or heading we can use/
//  ---> inner text, innerHTMl, innerContent

let para = document.querySelector("p");
// it just simply show the text which is already showing on web pages
console.log(para.innerText);
// it will show everything which tag and functions is being used to create the text
console.log(para.innerHTML);
// it will show text content-->> get the text from your html file 
// and even if you make some content hidden but still it will show you.
console.log(para.textContent);

// ________________________________________________________________________________________

// manupalating attribute -- getter and setter     attr like >> id, class,style, src etc.
// we can get the attribute of any element using getAttribute(attr) method
// we can set the attribute of any element using setAttribute(attr, val) method

let img = document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id","spiderman_ID"); // now the id of spiderman img has been chaged and the css will also get removed with that id name

// ________________________________________________________________________________________

// manupalating style using javascript

// to change the styling use javascript 
let heading = document.querySelector("h1");
heading.style.color = "red";
// this will change the color of the heading to red
heading.style.backgroundColor = "black";

// to see the class of any attribute ot to add the class 
console.log(heading.classList);  // now class list is empty beacuse there is no any class in h1 heading 
// to add the class
heading.classList.add("heading-class");
// to remove the class
// heading.classList.remove("heading-class");
console.log(heading.classList); 
// contains method tells that a class exist or not  
console.log(heading.classList.contains("heading-class")); // it will return true if class exist otherwise false
// toggle method acts like switch button -- when class is present then it will remove 
// and if the class is absent then it will add the class
heading.classList.toggle("class2");  // this will add the class2 because class2 does not exist
// ________________________________________________________________________________________

