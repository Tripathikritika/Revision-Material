function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let size = Number(input[0])
    let str = input[1].trim().split("")
    let maximum = ''

    for( let i = 0 ; i < str.length ; i++){
        let string = str.slice(i)
        if(string > maximum){
            maximum = string
        }
    }
    console.log(maximum.join(""))
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

runProgram(`105
boocrboocvboochboocbbooctboocsboocbboocwboocsboocqboocqboockbooceboocgboocaboocebooctboocyboocxboocbbooci`)