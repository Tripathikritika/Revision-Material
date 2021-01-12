
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [size , target] = input[0].trim().split(" ").map(Number)
    let array = input[1].trim().split(" ").map(Number)
    
    let res = binarySearch(array,target)
    console.log(res)

    function binarySearch( array ,k ){

        let lo = 0 
        let high = size - 1    
        while( lo <= high ){
            let mid = lo + Math.floor((high-lo)/2)
            if(array[mid] === k){
                return mid
            }
            else if( array[mid] < k){
                lo = mid + 1 
            }
            else{
                high = mid - 1
            }
        }
        return -1
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

runProgram(`5 1
3 4 5 1 2`)