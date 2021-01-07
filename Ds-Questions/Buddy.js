let A = "ab"
let B = "ab"
function runProgram(){
 
    A = A.split("")
   
    for( let i = 0 ; i < A.length ; i++){
        let array = [...A]
        for( let j = 0 ; j < B.length ; j++ ){
            swap(array, i , j)

           if( array.join("") === B){
                console.log(true)
                return
           }
           else{
               swap(array,i,j)
           }
        }
    }
    console.log(false)
   
    function swap(arr, a , b ){
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp

        return arr
    }
}

runProgram()