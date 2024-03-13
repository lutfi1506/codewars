// challenge 20
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// Beginner Series #3 Sum of Numbers
// level 7 kyu

// const getSum = (a, b) => (a > b) ? [...Array((a-b)+1)].map(_ => a--).reduce((x,y)=>x+y) : [...Array((b-a)+1)].map(_ => a++).reduce((x,y)=>x+y)

// bjir lah susah susah nyari rumus ternyata gampang :(

const getSum = (a, b) => {
   let min = Math.min(a, b),
      max = Math.max(a, b);
   return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(0,-1))
console.log(getSum(0,1))
console.log(getSum(2,2))
console.log(getSum(-1,0))