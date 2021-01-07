function runProgram( paliValue , str){
    
    str = str.split("")
    paliValue = paliValue.split("")

    let result = str.reduce((a,c) => c + a)
    
    if( result != paliValue){
        console.log("No")
    }
    else{
        console.log("Yes")
    }
}

runProgram( "nitin" , "nitin")