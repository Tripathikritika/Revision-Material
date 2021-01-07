let arr = [10,5,2,6]
let k = 100
function runProgram(){
    let count = 0
    for( let i = 0 ; i < arr.length ; i++){
        for( let j = i ; j < arr.length ; j++){
           let product = 1
           let subArray = arr.slice(i,j+1)
            subArray.forEach((item) => {
                product *= item
            })
            if( product < k){
                count++
            }
        }
    }
    console.log(count)
}

runProgram()

// TC : O(n2)