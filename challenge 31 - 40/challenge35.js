// challenge 35
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
// Will you make it?
// 8 kyu

const zeroFuel = (distanceToPump, mpg, fuelLeft) => (mpg*fuelLeft >= distanceToPump)

console.log(zeroFuel(100,50,1))