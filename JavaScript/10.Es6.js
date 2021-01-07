// let nums = []
// for (let i = 1; i < 6; i++) {
//   nums.push(function() {console.log(i)});
// }
// nums.forEach(fn => fn());

let nums = []
for (var i = 1; i < 6; i++) {
  nums.push(function() {console.log(i)});
}
nums.forEach(fn => fn());
// // 6 6 6 6 6 
let a = [2,3,4];
let b = [ 1, ...a, 5 ];
console.log(b);
// //