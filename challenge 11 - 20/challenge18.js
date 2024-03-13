// challenge 18
// level 7 kyu

String.prototype.toJadenCase = function () {
   return this.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1))
};

str = "hello world ges semuanya"

console.log(str.toJadenCase())

// failed :( 