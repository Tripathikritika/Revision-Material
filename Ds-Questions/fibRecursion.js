function runProgram( input ) {
    input = Number(input)
    let res = 0
    
    for( let i = 0 ; i <= input ; i++){
        console.log(fib( res ))
        res++
    }

    function fib (n) {
        
        if( n === 0 ){
            return n
        }
        else if ( n === 1){
            return n
        }
        else{
            return fib(n-1) + fib(n-2)
        }
    }
}
runProgram( 10 )