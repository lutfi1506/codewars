// challenge 32
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// Shortest Word
// 7 kyu


function findShort(s){
   const panjang = String(s).split(" ").map(a => a.length)
   return Math.min(...panjang)
}

console.log(findShort("wawi cuy"))