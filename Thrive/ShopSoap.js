function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let size = input.shift()
    let array = []
    array = input.shift().trim().split(" ").sort((a,b) => a-b).map(Number)
    let numOfQueries = Number(input[0])
    let line = 1 
    let q = []

    for( let i = 0 ; i < numOfQueries ; i++){
        let res = soapShop(array , input[line++])
        console.log(res)
    }
 
    function soapShop(array,q) {
        
        let lo = 0 
        let hi = array.length-1
        let answer = -1
        
        //1 4 10 5 6
        while( lo <= hi ){
            let mid = lo + Math.floor((hi-lo)/2)
            if( array[mid] < q ){
                answer = mid
                lo = mid + 1
            }
            else {
                hi = mid - 1
            }
        }
        return answer+1
        
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

runProgram(`5
1 4 10 5 6
4
2
3
5
11`)