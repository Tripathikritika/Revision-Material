function runProgram( input ) {

    input = input.split("")
    //k r i t
    for( let i = 0 ; i < Math.floor(input.length/2) ; i++){
        let temp = input[i] 
        input[i] = input[input.length-1-i]
        input[input.length-1-i] = temp
    } 
    console.log(input.join(""))
}

runProgram( "fan" )