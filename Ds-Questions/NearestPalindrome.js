function runProgram( input ){

    let i = 1
    let x = Number(input)
    let y = Number(input)

    while( true ){
        
        let stringX = (++x).toString()
        let palidromeStringX = stringX.split("").reduce((a,c) => c + a)

        if( y > 0){

            let stringY = (--y).toString()
            let palidromeStrinY = stringY.split("").reduce((a,c) => c + a)

            if( palidromeStrinY === stringY){
                return palidromeStrinY
            }
        }

        if( palidromeStringX === stringX){
            return palidromeStringX
        }
        
        i++
    } 
}

console.log(runProgram("17"))

// 22
// 32 33