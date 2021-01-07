function runProgram(input){
    // Write code here
    //TC : O(N)
    input = input.trim().split("\n")
    let size = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number)
    let arrayNew = [arr[0]]

    for( let i = 1 ; i < arr.length ; i++){
        if( arr[i] >= arrayNew[arrayNew.length-1]  ){
           arrayNew.push(arr[i])
        }   
    }
    console.log(arrayNew.join(" "))
  
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

runProgram(`10
4 8 3 7 2 1 5 9 6 10`)

// 1 2 4 5 7 8 9 10