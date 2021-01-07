function runProgram( paliValue ){
    paliValue = paliValue.split("")
    let len = paliValue.length

    for( let i = 0 ; i < Math.floor(len/2) ; i++){
       
        if( paliValue[i] !== paliValue[len-1-i]){
            console.log("No")
            return
        }

    }
    console.log("yes")
}
runProgram( "madam")