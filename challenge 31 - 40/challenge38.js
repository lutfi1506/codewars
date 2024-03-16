// challenge 38
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// How good are you really?
// 8 kyu


function betterThanAverage(classPoints, yourPoints) {
  return [...classPoints].reduce((p,n) => p + n)/[...classPoints].length < yourPoints
}

console.log(betterThanAverage([2,3],5))