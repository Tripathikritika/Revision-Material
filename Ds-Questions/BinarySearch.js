
let arr = [2 , 3, 8, 9, 10]
let target = 3
// 8 > 9 

function runProgram( ){
    arr = arr.sort((a,b) => a- b )
    let lo = 0
    let hi = arr.length-1

    while( lo <= hi ){
        let mid = lo + Math.floor((hi - lo)/2)
        if( arr[mid] === target ){
            return mid
        }
        else if(arr[mid] > target){
            hi = mid - 1
        }
        else {
            lo = mid + 1
        }
    }
    return -1

}

console.log(runProgram(arr,target))
// answ =0 

// lo high mid 
// sort nlogn
// logn => logn 

// 0(n3) => n2logn => O(n2) => nlogn => n => logn => 1
// nlogn + n 
// nlogn + logn => nlogn 