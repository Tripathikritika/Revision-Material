let arr = [4,3,2,7,8,2,3,1]
function runProgram(){
    
  
    for( let i = 1 ; i <= arr.length ; i++){
        if(arr.indexOf(i) === -1){
            console.log(i)
        }
    }
}

runProgram()

// i = 1 4 5 6 7 8
// arr = 1, 2, 2, 3,3, 4, 7, 8
// TC : O(n2)