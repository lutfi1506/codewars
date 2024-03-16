// challenge 25
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// List Filtering
// 7 kyu


const filter_list = l => [...l].filter(l => Number.isInteger(l) && l >= 0)

console.log(filter_list([1,'a','b',0,"2",15,-1]))