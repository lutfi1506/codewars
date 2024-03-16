// challenge 39
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
// You only need one - Beginner
// 8 kyu


// function check(a, x) {
//   return [...a].map(a => String(a)).find(a => a === String(x) ) ? true : false
// }

const check = (a,x) => [...a].includes(x)

console.log(check([false,0,"what",3],false))