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
    //1 5 1 3 2
  
    function subArrayFunc(arr , m) {
        let i = 0 
        let j = 0 
        let sum = arr[0]
        let count = 0 
        while( i < arr.length && j < arr.length){
            if(sum < m){
                j++
                if( j >= i){
                    count += j-i
                }
                if( j < arr.length){
                    sum += arr[j]
                }
            }
            else{
                sum -= arr[i]
                i++
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