
function runProgram( str1 , str2 , str3){
    str1 = str1.split("")
    str2 = str2.split("")
    str3 = str3.split("")
    let temp = ""

    for( let i = 0 ; i < str3.length ; i++ ){
        if( str1[0] === str3[i]){
            str1.shift()
        }
        else if( str2[0] === str3[i] ){
            str2.shift()
            }        
    }
    if(str1.length === 0 && str2.length === 0){
        return true
    }
    else{
        return false
    }
}
console.log(runProgram( "abc" , "def" , "dabecf"))

// str1 = abc
// str2 = def
// str3 = dabecf

// str1+str2 = abcdef valid
// defabc = valid