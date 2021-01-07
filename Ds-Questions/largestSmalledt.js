let arr = [3,2,1,6,7]
function runProgram(){

    let max = -999999
    let min = 999999

    for( let i = 0 ; i < arr.length ; i++){
      
        if( arr[i] > max){
            max = arr[i]
            
        }
        if( arr[i] < min){
            min = arr[i]
        }
    }
    console.log(max , min)
}

runProgram(arr)

// lar = 7 sma = 1