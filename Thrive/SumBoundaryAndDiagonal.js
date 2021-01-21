function runProgram(input){
    input = input.trim().split("\n")
    let size = Number(input.shift())
    let matrix = []
    let newMat = 0

    for( let i = 0 ; i < size ; i++){
        matrix[i] = input[i].split(" ").map(Number)
    }
    
    let m = 0
    let n = size-1

    for( let i = 0 ; i < size ; i++) {
        for( let j = 0 ; j < size ; j++){
            if( i == 0 || j == 0 || i == (size-1) || j == (size-1)){
                newMat += matrix[i][j]
            }
            else if( i === j || (i+j) === size-1){
                newMat += matrix[i][j]
            }
        }
    }
    console.log(newMat)
  
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

runProgram(`5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7`)