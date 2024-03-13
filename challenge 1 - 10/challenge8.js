// challenge 8
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Find Maximum and Minimum Values of a List

// const min = list => list.sort(( a , b ) => a - b ).pop();
// const max = list => list.sort(( a , b ) => a - b ).shift();

const max = list => Math.max(...list)
const min = list => Math.min(...list)

console.log(min([1,3,2]))
console.log(max([1,2]))
console.log(max([4,6,2,1,9,63,-134,566]))