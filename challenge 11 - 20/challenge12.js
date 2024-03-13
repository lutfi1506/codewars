// challenge 12
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// Count by X

const countBy = (x, n) => [...Array(n)].map((_,i)=> x + i * x)

console.log(countBy(5,2))