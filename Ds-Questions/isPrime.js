arr = [1,3,5,4,8,13,11,15,21,23].map(Number)
function runProgram( arr ) {
    let res = []
    for( let i = 0 ; i < arr.length ; i++ ){
       if(checkPrime(arr[i])){
           res.push(1)
       }
       else{
           res.push(0)
       }
    }
    console.log(res)
    function checkPrime( num ) {
        if( num === 1 ){
            return false 
        }
        else if( num === 2){
            return true
        }
        else{
            for( let j = 2 ; j < num ; j++){
                if( num % j == 0){
                    return false
                }
            }
            return true
        }
    }
}
runProgram(arr)