function runProgram(input){
    input = input.trim().split("\n")
    let size = Number(input[0])
    let array = input[1].trim().split(" ")
    let flag = false
    let newArray = []

    for( let i = 0 ; i < array.length ; i++){
        if( array[i] < 0){
            flag = true
            array[i] = 0
            newArray += array[i]
           
        }
        else{
            flag = false
            newArray += array[i]
        }
    }
    console.log(newArray)
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
2 -4 6 8 -9`)