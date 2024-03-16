// challenge 40
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// Reversed sequence 
// 8 kyu


// const reverseSeq = n => [...Array(n)].map((_,i) => i + 1).sort((a,b) => b - a)
const reverseSeq = n => Array.from({length:n} , () => n--)

console.log(reverseSeq(5))