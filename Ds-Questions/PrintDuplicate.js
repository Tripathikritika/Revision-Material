function runProgram( str ){
    let obj = {}

    for( let i = 0 ; i < str.length ; i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }
        else{
            obj[str[i]] = 1
        }
    }
    for( key in obj){
        if(obj[key] > 1){
            console.log(key)
        }
    }
}
runProgram( "madam")

//a m
// a : 2 d:1 m:2 