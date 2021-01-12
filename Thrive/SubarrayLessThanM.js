function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let testCases = Number(input[0])
    let line = 1 

    for( let i = 0 ; i < testCases ; i++){
        let [size , m] = input[line++].trim().split(" ").map(Number)
        let array = input[line++].trim().split(" ").map(Number)
        
        let res = subArrayFunc(array , m)
        console.log(res)
    }
  
    function subArrayFunc(arr , m) {
        console.log(m)
        let count = 0
        for(let i = 0 ; i < arr.length ; i++){
            for( let j = i ; j < arr.length ; j++){
                let subArray = arr.slice(i,j+1)
                let subSum = subArray.reduce((a,c) => a+c )
                console.log({subSum})
                if( subSum < m ){
                    count++
                }
            }
        }
        return count  
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

runProgram(`1
5 5
1 5 1 3 2`)