// challenge 27
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// Rock Paper Scissors!
// 8 kyu


// const rps = (p1, p2) => {
//    if(p1 === p2) return "Draw!"
//    if(p1 === "rock" && p2 === "scissors") return "Player 1 won!"
//    if(p1 === "scissors" && p2 === "paper") return "Player 1 won!"
//    if(p1 === "paper" && p2 === "rock") return "Player 1 won!"
//    return "Player 2 won!"
// };

const rps = (p1,p2) => {
   const rules = {rock: "scissors", paper: "rock", scissors: "paper"}
   if(p2 === rules[p1]) return "win"
}

console.log(rps("rock","scissors"))