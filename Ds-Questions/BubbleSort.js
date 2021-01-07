
let arr = [5,1,4,2,8]
function runProgram(){
    for( let i = 0 ; i < arr.length-1 ; i++){
        for( let j = 0 ; j < arr.length-1-i ; j++){
            if( arr[j] > arr[j+1]){
                arr[j] = arr[j] + arr[j+1] 
                arr[j+1] = arr[j] - arr[j+1] 
                arr[j] = arr[j] - arr[j+1] 
            }
        }
    }
    +console.log(arr)
   
}

runProgram(arr)

let a = 3

let b = 2

a = a + b // a = 5
b = a - b // b = 3
a = a - b // 5-3 = 2
console.log({a} , {b})


// 1 2 3 6 7
// i=0 till end
// j = i till j=size-i-1
// 3 2 1 6 7
// i = 3 => 2 1 3 6 7
// 