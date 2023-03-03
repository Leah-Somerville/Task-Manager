// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
let userInput = prompt(menu).toUpperCase();

// Loops and continues to the menu until the user ends/closes the Task Manager (AKA until the user enters CLOSE)

while (userInput !== `CLOSE`){

    if (userInput == "TASKS"){
        showTasks = [];
        for (i = 0; i < tasks.length; i++){
            showTasks += tasks[i];
            showTasks += "\n";
        }
        alert(showTasks);

    }else if (userInput === "NEW"){
        newTask = prompt(`Enter your new task:`);

        while (newTask === ""){
            newTask = prompt(`Enter your new task:`);
        }
        tasks.push(newTask);
        alert(`"${newTask}" has been added!`);

    }else if (userInput === "REMOVE"){
        showTasks = [];
        for (i = 0; i < tasks.length; i++){
            showTasks += i + 1;
            showTasks += ": ";
            showTasks += tasks[i];
            showTasks += "\n";
        }
        
        num = parseInt(prompt("Please enter a number to remove: \n" + showTasks));

        // loop that continues looping until the user enters a valid response(AKA Number)
        // Verify the user entered a whole number that is one of the options in the prompt(1 to the length of the array)
        // The 1st condition (Math.floor(num) != num checks to see if the user entered in a decimal
        // The 2nd condition (num < 0) checks to see if the user entered in 0 or a negitive number
        // The 3rd condition (um >= tasks.length) checks to see if the user enterd a number that is higher than the length of task (AKA Higher than the highest number displayed)
        // The 4th condition (!num) checks to see if the user entered did not enter in a number (AKA a value that can not be converted to a number)
        // The 5th condition (num != 0) checks is used incase the user entered in 1 which will be converted to 0 and would cause the loop to run without this extra condition
        while ((Math.floor(num) != num || num < 0 || num >= tasks.length || !num) && num != 0){
            alert(`Not a valid entry`)
            num = parseInt(prompt("Please enter a number to remove: \n" + showTasks));
        }

        removed = tasks.splice(num-1, 1);
        alert("\"" + removed + "\" has been removed");
    }else{
        userInput = prompt(menu);
    }
    userInput = prompt(menu).toUpperCase();;
    // This can be removed once the close feature is completed
    // break;
}

// 
alert(`Thank you for using the Task Manager`);