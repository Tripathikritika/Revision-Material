function runProgram( str ){
    str = str.split(" ")

    
    for( let i = 0 ; i < str.length/2 ; i++){
        let temp = str[i]
        str[i] = str[str.length-1-i] 
        str[str.length-1-i] = temp
    }
    console.log(str)
}

runProgram("A Happy life")

// life happy a
// a yppah egil