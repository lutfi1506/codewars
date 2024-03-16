// challenge 24
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// Count of positives / sum of negatives
// 8 kyu


function countPositivesSumNegatives(input) {
  return input && input.length ?[[...input].filter(p => p > 0).length ,[...input].filter(p => p < 0).reduce((a,b) => a + b)]:[]
}


// const number = [1,2,3,4,5,6,7,8,9,10]
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const number2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
console.log(countPositivesSumNegatives([]))