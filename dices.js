/*

We should check if we have a good chance of winning in a game with two dices. 
The values of the dices are added. 
We start the game with 50c. 
The profit is computed with to following table:

Sum             Payback         Profit
12              4x input        +1,50 Euro
11              3x input        +1,00 Euro
10              2x input        +0,50 Euro
7,8,9           input back      +0,00 Euro
2,3,4,5,6       none            -0,50 Euro

Is it good to take part in this game? 
Try in a loop with 1000 iterations, if you lose or win in the long run. 
You can simulate the dices with random numbers. 
(Use your favourite language)

ASSUMPTIONS:
1. In each play, you play with 50c (not with what you have accumulated so far), so each play is seperate.
2. If it is good to take part in this game is determined if you'd win or lose money if you were to play the game 1000 times.

TO RUN THE SCRIPT:
1. Make sure node.js is installed
2. Navigate to the root folder (where dices.js lives)
3. Run "node dices.js" in the terminal

CONCLUSION:
It is a terrible game to take part in. In the long run, you almost always lose.
*/

function computeProfit(diceSum) {
    switch(diceSum) {
        case 12:
            return 150
        case 11:
            return 100
        case 10:
            return 50
        case 7:
        case 8:
        case 9:
            return 0
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return -50
        default:
            throw new Error("Dices must be loaded or something!")
    }
}

function throwDices() {
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    return dice1 + dice2   
}

function isGameGood(sum = 50, numberOfGames = 1000) {
    for(let i = 1; i <= numberOfGames; i++) {
        let dices = throwDices();
        let profit = computeProfit(dices);
        sum = sum + profit
        console.log(`Round: ${i}; Dices: ${dices}, Profit: ${profit}; Sum: ${sum}`)
    }
    console.log("FINAL SUM:", sum)
    return sum
}

isGameGood();
