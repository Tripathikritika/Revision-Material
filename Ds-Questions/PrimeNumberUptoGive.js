function runProgram( input ) {
    // 2 , 3, 5, 7
    //  1 2 3 4 5 6 7 8 9 10 
    let arr = []
    for( let i = 1 ; i <= input ; i++){
        if( checkPrime(i) ){
            arr.push(i)
        }
        
    }
   console.log(arr)
    function checkPrime( n ){
        if( n === 1 ){
            return false
        }
        else if( n === 2){
            return true
        }
        else {
            for( let j = 2 ; j < n ; j++){
                if( n % j == 0){
                    return false
                }
            }
            return true
        }
    }
}

runProgram( 10 )