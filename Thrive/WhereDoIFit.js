function runProgram(input){
    // Write code here
    input = input.split("\n")
    let testCase = Number(input[0])
    let line = 1

    for( let i = 0 ; i < testCase ; i++){
        let key = Number(input[line++])
        let arr = input[line++].split(" ").map(Number)
        
        let res = binarySearch(arr , key)
        console.log(res)
    }
  
    function  binarySearch( arr , key ) {
        let lo = 0 
        let len = arr.length
        let hi = len-1
        let upper = -1
        let lower = -1

        while( lo <= hi ){
            let mid = lo + Math.floor((hi-lo)/2)
            if( arr[mid] > key ){
                hi = mid - 1
                upper = mid
            }
            else if( arr[mid] < key){
                lo = mid + 1
                lower = mid
            } 
        }
        if(lower === -1){
            return "Front" + " " + arr[upper] 
        }
        if(upper === -1){
            return  arr[lower] + " " + "Last" 
        }
        return arr[lower] + " " + arr[upper] 
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

runProgram(`3
3
1 4 5 6 8 9
5 
1 2 6 7 8
1
2 3 4 5 6`)