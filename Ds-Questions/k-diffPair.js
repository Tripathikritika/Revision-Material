let arr = [1, 3, 1, 5, 4]
let k = 0
function runProgram(){
   
   arr = new Set([...arr])
   arr = [...arr]
   let count = 0

    for( let i = 0 ; i < arr.length ; i++){
        for( let j = i+1 ; j < arr.length ; j++){
            if( Math.abs(arr[i] - arr[j]) == k){
               count++
            }
        }
    }
    console.log(count)
}
runProgram()