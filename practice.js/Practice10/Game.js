/*
Create 2 player objects with below information
player1 = { nickName: 'Player 1', score: 5 }
player2 = { nickName: 'Player 2', score: 5 }

Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }

Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/

/*
1. Execute the attack() method for player1 over player2
    -this will decrease player2's score by 1 and increase player1's score by 1

2. Execute the attack() method for player1 over superPlayer
    -this will decrease superPlayer's score by 1 and increase player1's score by 1

3. Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
    -this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 6

4. Execute the heal() method for heroPlayer over player1 and player2
    -this will increase player1 and player2's score by 1

5. Execute the attack() method for player1, player2 and heroPlayer over superPlayer
    -this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 1

6. Execute the damage() method for player1 and player2
    -this will decrease player1 and player2's score by 1
*/

const HeroPlayer = require("./HeroPlayer");
const Player = require("./Player");
const SuperPlayer = require("./SuperPlayer");

const player1 = new Player('Player 1', 5)
const player2 = new Player('Player 2', 5)
const superPlayer = new SuperPlayer('Super Player', 3)
const heroPlayer = new HeroPlayer('Hero Player', 10)

// 1. Execute the attack() method for player1 over player2
player1.attack(player2)

// 2. Execute the attack() method for player1 over superPlayer
player1.attack(superPlayer)

// 3. Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
superPlayer.superAttack(player2)
superPlayer.superAttack(player1)
superPlayer.superAttack(heroPlayer)

// 4. Execute the heal() method for heroPlayer over player1 and player2
heroPlayer.heal(player1)
heroPlayer.heal(player2)

// 5. Execute the attack() method for player1, player2 and heroPlayer over superPlayer

player1.attack(superPlayer)
player2.attack(superPlayer)
heroPlayer.attack(superPlayer)

// 6. Execute the damage() method for player1 and player2

player1.damage()
player2.damage()

/*
Print information of all the players using getInfo() method

EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/

console.log(player1.getInfo()) // 6
console.log(player2.getInfo()) // 3
console.log(superPlayer.getInfo()) // 5
console.log(heroPlayer.getInfo()) // 9


// instead of doing one by one:
const players =[player1, player2, superPlayer, heroPlayer]

for (const player of players) {
    console.log(player.getInfo())
}

