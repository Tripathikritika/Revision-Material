function runProgram( n ){
    n = Number(n)
    let lo = 0
    let hi = Math.floor(Math.sqrt( n ))

    while( lo < hi ){
        let val = lo*lo + hi*hi

        if( val < n){
            lo++
        }
        else if(val > n){
            hi--
        }
        else{
            console.log(true)
            return
        }
    }
    console.log(false)
}
runProgram( "3" )

// n = 5 => 1 2 3 4 5
// TC :O(sqrt(n))