const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`Hello, ${name}.`);

let alive= true;
let key= false;
while (alive == true) {
    let option = readline.keyIn("Enter 1 to put hand in hole, \nEnter 2 to find the key or \nEnter 3 to open the door."); 
    if (option == 1) {
    console.log("You are dead.");
    alive = false;
}
    else if (option == 2) {
        if (key == false) {
        console.log("You found the key!");
        key = true;
        } else if (key == true) {
            console.log("You already have the key")
        }
    }
    else if (option == 3) {
        if (key == false) {
            console.log("You need the key first")
        } else if (key == true) {
            console.log("You have escaped!");
            break;
        }
    }
}
