# code-challenges

This repository contains solutions to the first two of Alasco coding tasks.
These solutions come in the forms of JS scripts (to be run on Node.js)

To run the scripts:
1. Make sure you have Node.js installed on your computer
2. Clone or download the repository 
2. Navigate to the root folder (where `rect.js`/`dices.js` lives)
3. Run `node rect.js` or `node dices.js` in the terminal

## rect.js

**Question:** Determine if 2 rectangles intersect  
  
**Assumptions:**  
1. I will be given two rectangle objects with x and y coordinates
2. x coordinates will be from left to right 
3. y coordinates will be from bottom to up

## dices.js

**Question:**  
We should check if we have a good chance of winning in a game with two dices.   
The values of the dices are added.   
We start the game with 50c.   
The profit is computed with to following table:

Sum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payback&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profit  
12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4x input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1,50 Euro  
11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1,00 Euro  
10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2x input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+0,50 Euro  
7,8,9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+0,00 Euro  
2,3,4,5,6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;none&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-0,50 Euro  

Is it good to take part in this game?  
Try in a loop with 1000 iterations, if you lose or win in the long run.   
You can simulate the dices with random numbers.  

**Assumptions:**
1. In each play, you play with 50c (not with what you have accumulated so far), so each play is seperate.  
2. If it is good to take part in this game is determined if you'd win or lose money if you were to play the game 1000 times.  

**Conclusion (Spoiler Alert):**  
It is a terrible game to take part in. In the long run, you almost always lose.
