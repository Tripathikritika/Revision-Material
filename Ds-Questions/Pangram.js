function runProgram(arr) {
    arr = arr.split("")
    let obj = {}
    for( let i = 0 ; i < arr.length ; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }
        else{
            obj[arr[i]] = 1
        }
    }
   
    if(  Object.keys(obj).length === 26){
        console.log("Yayy Its a Pangram :)")
    }
    else{
        console.log("Oops its not :(")
    }
}

runProgram('qwertyuiopasdfghjklzxcvbnmk4')
