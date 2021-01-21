// function runProgram( input ) {
//     input = Number(input)
    
//     for( let i = 0 ; i <= input ; i++){
//         console.log(fib( i ))
        
//     }

//     function fib (n) {
        
//         if( n === 0 ){
//             return n
//         }
//         else if ( n === 1){
//             return n
//         }
//         else{
//             return fib(n-1) + fib(n-2)
//         }
//     }
// }
// runProgram( 10 )

function runProgram( input ) {
    input = Number(input)

    for( let i = 0 ; i < input ; i ++){
        let res = fib(i)
        console.log(res)
    }

    function fib( n ){
        if( n === 0){
            return n
        }
        else if( n === 1){
            return n
        }
        else{
            return fib(n-2) + fib(n-1)
        }
    }
}
runProgram( 5 )
