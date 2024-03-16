// challenge 26
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
// Binary Addition
// 7 kyu

addBinary = (a,b) => (parseInt(a)+parseInt(b) >>> 0).toString(2)


console.log(addBinary(5,250))