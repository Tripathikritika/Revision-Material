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

runProgram(arr , sum)

// 4,5= 9 
// i +1
// i = 0 j = 5 times
// i = 1 j = 4 times
// i = 2 j = 3 times
// i = 3 j = 2 times
// i = 4 j = 1 times
// i = 5 
// n(n+1)/2 => n2/2 + n/2
// O(n2)
//jab bhi inner loop outer pe depended hota hai toh iss tarike se nikalne ke