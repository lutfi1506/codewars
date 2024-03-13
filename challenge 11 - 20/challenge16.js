// challenge 16
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Reverse words

const reverseWords = str => String(str).split(" ").map(a => [...a].reverse().join("")).join(" ")

console.log(reverseWords('apple cuy gass'))
console.log(reverseWords('olleh drow'))