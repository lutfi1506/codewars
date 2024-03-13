// www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare('625'))



function flickSwitch(arr){
  let flick = true
  
   return arr.map(item => item === 'flick'? flick = !flick: flick)
              

}

console.log(flickSwitch([""]))