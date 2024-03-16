// challenge 37
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Descending Order
// 7 kyu


function descendingOrder(n){
  return +([...String(n)].sort((a,b) => b - a).join(""))
}

console.log(descendingOrder(15))