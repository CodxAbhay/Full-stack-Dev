let todo = [];

while(true){
    let req = prompt("Enter your request");

    if(req === "quit"){
        console.log("Quiting the app");
        break;
    }
    else if(req === "list"){
        console.log("____________________");
        for(task of todo){
            console.log(task);
        }
        console.log("____________________");
    }
    else if(req === "add" ){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("Task added");
    }
    else if(req === "delete"){
        let task = prompt("Enter the task you want to delete");
        let index = todo.indexOf(task);
        if(index !== -1){
            todo.splice(index, 1);  // this is not slice method this is splice
            // splice is one in all method like -- remove, replace , add element 
            // use -- splice(start, deleteCount, item 0...item N);
            console.log("Task deleted");
        }
    }
    else {
        console.log("Invalid request. Please try again.");
    }
}