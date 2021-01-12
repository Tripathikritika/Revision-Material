function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let testCase = Number(input[0])
    let line = 1

    for( let i = 0 ; i < testCase ; i++){
        let size = input[line++]
        let array = input[line++].trim().split(" ")
        let res = findNextGreater(array)
        console.log(res)
    }
  
    function findNextGreater(array) {
        let temp = []
        for( let i = 0 ; i < array.length ; i++){
            let flag = false
            for(let j = i+1 ; j < array.length ; j++ ){
                if(array[j] > array[i]){
                    temp.push(array[j])
                    flag = true
                    break
                }
            }
            if(!flag){
                temp.push(-1)
            }
        }
        return temp.join(" ")
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

runProgram(`2
4
1 3 2 4`)