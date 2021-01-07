function runProgram(input){
    // Write code here
    input = input.split("\n")
    let testCase = Number(input[0])
    let line = 1

    for( let i = 0 ; i < testCase ; i++){
        let str = input[line++].split("")
        let count = 0
        let strPowerCount = 0
        for(let j = 0 ; j < str.length ; j++){
            if(str[j] === str[j+1]){
                count ++
            }
            else{
                if(count >= strPowerCount){
                    strPowerCount = count + 1
                    count = 0
                }
                else{
                    count = 0
                }
            }
        }
        console.log(strPowerCount)
  
    }
  
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

runProgram(`4
aaaaaa
aaabbb
asd
aabbcc`)