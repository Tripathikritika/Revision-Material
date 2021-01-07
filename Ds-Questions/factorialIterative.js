function runProgram( input ) {

    let res = 1
    for( let i = 2 ; i <= input ; i++){
        res *= i
        
    }
    console.log(res)

}

runProgram( 5 )