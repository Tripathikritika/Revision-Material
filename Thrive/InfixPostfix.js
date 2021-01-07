function runProgram(input){
    // Write code here
    input = input.split("")
    var size = input.length

    var anotherResult = checkInput( input )
    console.log(anotherResult)

    function checkInput( array ) {
        var stackOne = []
        var result = ""
        let precedence = { '+' : 1 ,
                          '-' : 1,
                          '*' : 2,
                          '/' : 2,
                          '^' : 3 }
      
        for( var i = 0 ; i< size ;i++ ){
            if( checkOperations(array[i])){
                result += array[i]
            }   
            else if(array[i] === '('){
                stackOne.push(array[i])
            }  
            else if(array[i] === ')'){
                while(stackOne.length !== 0 &&  stackOne[stackOne.length-1] !== '('){
                    result += stackOne.pop()
                }
                if(stackOne[stackOne.length-1] === '('){
                    stackOne.pop()
                }
            }   
            else{
                while(stackOne.length > 0 &&  precedence[stackOne[stackOne.length-1]] >= precedence[array[i]]){
                    result += stackOne.pop()
                } 
                stackOne.push(array[i]) 
            }
        }
        while(stackOne.length !== 0){
            result += stackOne.pop()
        }
        return result
        // console.log({result},{stackOne})      
    }
    function checkOperations( x ) {
        return ( x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z')
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

runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`)
// ab+c-def-*g/+hij/*+
