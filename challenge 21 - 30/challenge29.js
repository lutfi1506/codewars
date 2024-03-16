// challenge 29
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Opposites Attract
// 8 kyu

const lovefunc = (flower1, flower2) => {
   return (flower1 % 2) + (flower2 % 2) === 1 
}

console.log(lovefunc(1,2))