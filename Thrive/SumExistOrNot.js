function runProgram(input){
    input = input.trim().split("\n")
    let size = Number(input[0])
    let array = input[1].trim().split(" ").map(Number)
    let sum = Number(input[2])

    for( let i = 0 ; i < array.length ; i++){
        for( let j = 0 ; j < array.length ; j++){
            console.log(array[i] , array[j])
            if( array[i] + array[j] === sum){
                console.log("yes")
                return
            }
           
        }
    }
    console.log("no")
  
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

runProgram(`5
1 2 3 6 9
16`)