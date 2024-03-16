// challenge 31
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// Calculate average 
// 8 kyu

const findAverage = array => array.length ?[...array].reduce((p,c) => (p + c )) / [...array].length: 0

console.log(findAverage([]))