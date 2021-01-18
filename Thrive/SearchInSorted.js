
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [size , target] = input[0].trim().split(" ").map(Number)
    let array = input[1].trim().split(" ").map(Number)
    
    let lo = 0 
    let high = size - 1   
    let mid = lo + Math.floor((high-lo)/2)
    
  
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
// 	read = read.replace(/\n$/,"")
// 	read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`20 12
18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`)