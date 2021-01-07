let arr = [5,2,6,7,3,4]
let sum = 9
function runProgram(){
  
    for( let i = 0 ; i < arr.length-1 ; i++){
        for( let j = i+1 ; j < arr.length ; j++){
            if(arr[i] + arr[j] === sum){
                console.log(arr[i] , arr[j])
            }
        }
    }
}

runProgram("kritika")