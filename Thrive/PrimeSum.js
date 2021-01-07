function runProgram(input){
    input = Number(input)
    let sum = 0
    for( let i = 1 ; i <= input ; i++){
    
        if(checkIsPrime(i)){
            sum += i
        } 
    }
    console.log(sum)

    function checkIsPrime( n ){
        if( n === 1){
            return false
        }
        else if(n === 2){
            return true
        }
        else{
            for( let i = 2 ; i < n ; i++){
                console.log(n , {i})
                if( n % i === 0){
                    return false
                }
            }
            return true
        }
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

runProgram(`13`)

/* 
1 - f
2 - t
3 - f
4 - t
5 - f
6 - t
7 - 
8
9
10
11
12
13*/