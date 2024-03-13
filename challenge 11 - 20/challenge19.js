// challenge 19
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// Grasshopper - Summation
// level 8 kyu

var summation = num => [...Array(num)].map((_,i) => i+1).reduce((a,b)=>a+b)

console.log(summation(8))