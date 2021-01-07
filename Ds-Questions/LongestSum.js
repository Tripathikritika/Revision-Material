var arr = [10,-2,4,5,7,-3]

function runProgram( ){
    let count = 0   
    let temp = -999999
    
    for( let i = 0 ; i < arr.length ; i++){
        count += arr[i]
        if( count > temp){
            temp = count
        }
    }
    console.log(temp)
}

runProgram()

// 10
// 10-2 = 8
// 4 +5 +7 =8+16 = 24 
// 24 - 3 = 21
// temp - []  10 8 12 17 24 21

//TC : O(n)