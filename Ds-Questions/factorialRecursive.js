function runProgram( input ) {

    let res = fact( input )
    console.log(res)
    function fact( n ) {
        if( n === 0){
            return 1
        }
        else{
            return n * fact(n-1)
        }
    }
    

}

runProgram( 5 )