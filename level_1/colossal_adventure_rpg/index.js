/*
1. Console must greet player with a fun message
2. Console must ask for the player's name and store it
3. Walking:
- The console will ask the user to enter a "w" to walk
- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
- Use a while loop to control this flow.
1. If a wild enemy appears:
- The enemy is random (can be chosen out of a minimum of 3 different enemy names)
- The user can decide to attack or run
- If attacking, a random amount of damage will be delt between a min and max
- If running, there will be a 50% chance of escaping
- After the player attacks or runs the enemy attacks back for a random damage amount
- The player and enemy will attack each other in a loop until one of them passes out or dies.
- If the player kills the enemy you can give the hero some HP and a special item that is stored in the inventory. After this, the player will continue walking.
- If the enemy kills the player the console prints a cool death message and the game ends
1. Inventory
- When the player kills enemies, they are awarded with items
- If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
*/
const readlineSync = require('readline-sync');
let gameOver = false;
let hasWon = false;
let userHealth = 100;
let inventory = [];
let enemies = [];
function Enemy (enemyName, minDamage, maxDamage, HP, item) {
    this.enemyName = enemyName;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.HP = HP;
    this.item = item;
    this.isDefeated = false;
}
enemies.push(new Enemy("Goblin", 0, 100, 100, "knife"));
enemies.push(new Enemy("Troll", 0, 100, 100, "baton"));
enemies.push(new Enemy("Crackhead", 0, 100, 100, "gun"));

// Game Start
const userName = readlineSync.question('What is your name? ')
console.log(('Welcome to the game ' + userName + '!'));
while (!gameOver && !hasWon) {
    readlineSync.setDefaultOptions({limit: ['w', 'p', 'q']})
    let input = readlineSync.question('Press [w]walk . Press [p]rint] to see status. or press [q]uit. ')
    if (input === 'q') {
        console.log('bye felicia! ')
        gameOver = true 
    }else if (input === 'p'){
        console.log((userName + ' has ' + userHealth + ' HP, and the following items: ' + inventory))
    } else if (input === 'w') {
        explore()
    }
}
function explore() {
    let num = Math.floor(Math.random()*4)
    if (num === 3) {
        battle()
    } else {
        console.log(("Walking..."))
    }
}
function enemySelector() {
    let randomEnemy = enemies[Math.floor(Math.random()*enemies.length)];
    return randomEnemy

}
function battle () {
    const currentEnemy = enemySelector()
    console.log(('its a ' + currentEnemy.enemyName + '!'))
    readlineSync.setDefaultOptions({limit: ['f', 'r', 'q']})  
    let fightRun = readlineSync.question('Are you going to [f]ight or [r]un? Press [q]uit. ')
    if (fightRun === 'q') {
        quit()
    } else if (fightRun === 'f') {
        fight(currentEnemy)
    } else if (fightRun === 'r') {
        run()
    }
}
function fight(obj) {
    let attack = Math.floor(Math.random() * (obj.maxDamage - obj.minDamage)) + obj.minDamage;
    let enemyAttack = Math.floor(Math.random()* (obj.maxDamage - obj.minDamage));
    while (userHealth > 0 && obj.HP > 0) {
        let fightRun = readlineSync.keyIn('are you going to [f]ight or [r]un? ', {limit: 'fr'})  
        if (fightRun === 'f') {
            console.log(('You decide to attack '));
            obj.HP = obj.HP - attack
            console.log('You gave ' + attack + ' points of damage! ' + obj.enemyName + ' currently has ' + obj.HP+ ' health available.')
            userHealth = userHealth - enemyAttack 
            console.log(('you were attacked by ' + obj.enemyName + ' and recieved ' + enemyAttack + ' points of damage to you! Your health is ' + userHealth + ' health points left.'))
            if (obj.HP <= 0) {
                inventory.push(obj.item)
                console.log(('You killed ' + obj.enemyName + '. You have ' + inventory + ' in your inventory.'))
                console.log(inventory)
                console.log('lets keep walking! ')
                enemies.splice(enemies.findIndex(Enemy => Enemy.enemyName === obj.enemyName), 1)        
            } 
            if (userHealth <= 0) {
                console.log(('you died! '))
                gameOver = true
            }
            if (enemies.length === 0) {
                hasWon = true;
                console.log(('you have defeated all the enemies! You have won the game! '))
                console.log('GAME OVER')
            }
        } else if (fightRun === 'r') {
            userHealth = 0
            gameOver = true
            console.log(('you lose '))
        }
    }
}
function run() {
    let escape = Math.floor(Math.random()*2)
    const currentEnemy = enemySelector()
    if (escape === 1) {
        console.log(('You escaped! '))
    } else {
        console.log(('' + userName + ', you werent able to escape! '))
        fight(currentEnemy)
    }   
}
function quit() {
    console.log(('good bye '))
    gameOver = true;
}