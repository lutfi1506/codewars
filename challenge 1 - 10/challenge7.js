// challenge 7
// https://www.codewars.com/kata/577a98a6ae28071780000989/javascript
// Sum Numbers


const sum  = numbers => [...numbers].reduce((a,b) => a + b , 0)

console.log(sum([]))