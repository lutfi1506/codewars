// challenge 30
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// Remove the minimum
// 7 kyu


function removeSmallest(numbers) {
  return [...numbers].filter((_,i,a) => i !== a.indexOf(Math.min(...numbers)));
}

// function removeSmallest(numbers) {
//   const min = Math.min.apply(this, numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }


console.log(removeSmallest([6,5,6,2,2,3,4]))