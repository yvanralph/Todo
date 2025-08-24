const prompt = require('prompt-sync')();

function showMenu(){
    console.log("");
    console.log("");
    console.log("            To-Do List App              ");
    console.log("****************************************");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Exit");
}
//Function to get users choice

function getuserchoice(){
    let choice = prompt("Enter your Choice [1-3]: ")
    return choice 
}

function addtask(){
    console.log("");
    console.log("Add New Task");
    let name = prompt("Enter Name of task: ");
    let time = prompt("Enter Time for task [HH:MM]: ");
    let date = prompt("Enter Date for task [YYYY-MM-DD]: ");
    let place = prompt("Enter location for task: ");

    let task = {
        taskname : name,
        tasktime : time,
        taskdate : date,
        taskplace : place,
    };
    return task
}

let task = []

function main(){
    showMenu();
    let choice = getuserchoice();
    if (choice === "1"){
        let newtask = addtask();
        task.push(newtask);
        main();
    }
    else if(choice === "2"){
        console.log("");
        console.log("Tasks to be completed");
        console.log(task);
        console.log("******************");
        main();
    }
    else if(choice === "3"){
        console.log("");
        console.log("****Closing application, Thank You *****")
        return
    }
    else{
        console.log("");
        console.log("Invalid choice Try again");
        main();
    }
}

main();



