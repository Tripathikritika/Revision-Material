function runProgram(input){
    // Write code here
    input = Number(input)
    let line = ""
    let arr = []
    let space = input // 5

    /* up */
    for( let i = 0 ; i <= input ; i++){ // 0 1 2 3 4 5
        //left spaces
        for (let j = space ; j > 0 ; j--) {
           line += " " // 5 4 3 2 1 
        }   
        // left side
        for( let j = 0 ; j <= i ; j++){
            line += j   //    
        }
        // right side
        for( let j = i ; j > 0 ; j--){
            line += j-1 //
        }
        //right spaces
        for (let j = space ; j > 0 ; j--) {
            line += " "
        } 
        
        arr.push(line)
        line = ""
        space-- 
    }
    /* reversed */
    space = 1
    for( let i = input-1 ; i >= 0 ; i--){
        for (let j = space ; j > 0 ; j--) {
            line += " "
         }   
         for( let j = 0 ; j <= i ; j++){
             line += j 
         }
         for( let j = i ; j > 0 ; j--){
             line += j-1
         }
         for (let j = space ; j > 0 ; j--) {
             line += " "
         } 
         arr.push(line)
         line = ""
         space++
        }
       
    arr.forEach((res) =>{
        console.log(res.split("").join(" "))
        //each iteration is joined with space 
    })
    
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

runProgram(`5`)