const readlineSync = require('readline-sync');

console.log("Welcome to the console!");

let playerName = readlineSync.question("What is your name? ");
console.log("Hello " + playerName + "!");

let walk = readlineSync.keyIn("Enter w to walk");

// isAlive = true
while (isAlive) {
    
    // accept input from the user to either Walk, quit game, or print status 
    if(action ==="w") { 
        // determine if they come ac
        // determine random number here 
        if(numer > 0.33) {
            // monster appears
            // call attack function 
        }
    }
    else if (action=="p") {
        // print status
    }
}

while (walk === "w") {
    let random = Math.random();
    if (random < 0.33) {
        console.log("A wild enemy appeared!");
    }
    else if (random < 0.66) {
    let enemy = Math.floor(Math.random() * 3);
    if (enemy === 0) {
        console.log("The enemy is a bear");
    }
    else if (enemy === 1) {
        console.log("The enemy is a tiger");
    }
    else if (enemy === 2) {
        console.log("The enemy is a snake");
    }

    let attack = readlineSync.keyIn("Enter a to attack or r to run");
    if (attack === "a") {
        let damage = Math.floor(Math.random() * 10);
        console.log("You attacked the enemy for " + damage + " damage!");
    }

    else if (attack === "r") {
        let run = Math.random();
        if (run < 0.5) {
            console.log("You successfully ran away!");
        }
        else {
            console.log("You failed to run away!");
        }
    }

    let enemyDamage = Math.floor(Math.random() * 10);
    let damage = Math.floor(Math.random() * 10);
    console.log("The enemy attacked you for " + enemyDamage + " damage!");
 
    let playerHP = 100;
    let enemyHP = 100;
    while (playerHP > 0 && enemyHP > 0) {
        playerHP -= enemyDamage;
        console.log("You have " + playerHP + " HP remaining");
        enemyHP -= damage;
        console.log("The enemy has " + enemyHP + " HP remaining");
    }
    if (playerHP <= 0) {
        console.log("You died!");
    }
    else if (enemyHP <= 0) {
        console.log("You killed the enemy!");
        let item = ["a sword", "a shield", "a potion"];
        let random = Math.floor(Math.random() * 3);
        console.log("You found a " + item[random] + "!");
    }
    
   
    let print = readlineSync.keyIn("Enter p to print");
    if (print === "p") {
        console.log("Name: " + playerName);
        console.log("HP: " + playerHP);
        console.log("Inventory: " + item);
    }}}
