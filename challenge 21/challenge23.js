// challenge 23
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// Mumbling
// 7 kyu

function accum(s) {
	return [...s].map((a,i) => a.toUpperCase() + a.toLowerCase().repeat(i)).join("-")
}

console.log(accum("ZpglnRxqenU"))