// const longest = (s1, s2)=>{
//    const result = [...s1]
   
//    return result
// }
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join();
console.log(longest('bca','bde'))