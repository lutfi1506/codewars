// challenge 28
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// Is he gonna survive?
// 8 kyu

const hero = (bullets, dragons) => dragons <= (bullets / 2)

console.log(hero(0,1))
console.log(hero(1,2))