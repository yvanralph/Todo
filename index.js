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

// function to validate date input
function getDate(){
    let regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    let date;
    
    while (true){
        date = prompt("Enter Date for task [YYYY-MM-DD]: ");
        if (regex.test(date)){
            return date;
        }

        console.log("Invalid input: [Valid Input YYYY-MM-DD]")
    }
}
    

// function to validate time in 24hours input
function getTime(){
    let regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    let time;
    while(true){
        time = prompt("Enter Time for task [HH:MM]: ");
        if(regex.test(time)){
            return time;
        }
        console.log("Invalid Input, Please Enter Time in 24hrs Format")
    }
}



//function to validate name input
function getName(){
    let name;
    while (true){
        name = prompt("Enter Taskname: ");
        if (name.trim() !== ""){
            return name;
        }
        console.log("Input can't be Empty, Enter Correct Taskname")
    }
}



function addtask(){
    console.log("");
    console.log("Add New Task");
    let name = getName();
    let time = getTime();
    let date = getDate();
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
        console.log("**** Closing application, Thank You *****")
        return
    }
    else{
        console.log("");
        console.log("Invalid choice Try again");
        main();
    }
}

main();



