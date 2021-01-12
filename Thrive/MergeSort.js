function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let size = Number(input[0])
    let array = input[1].trim().split(" ").map(Number)
    
    let start = 0 
    let end = size-1

    function mergeSort( array , start , end ){
     
        if(start < end ){
            let mid = Math.floor((start + end )/2)
            mergeSort(array , start , mid)
            mergeSort(array , mid+1 , end)
            mergeBoth(array , start , end )
        }
       return array
    }

    function mergeBoth( array , start , end){
        let mid = Math.floor((start+end)/2)
        let i = start
        let j = mid+1
        let k = start
        let temp = []

        while( i <= mid && j <= end){
            if(array[i] < array[j]){
                temp[k] = array[i]
                k++
                i++
            }
            else{
                temp[k] = array[j]
                k++
                j++
            }
        }   
        while( i <= mid){
            temp[k] = array[i]
            k++ 
            i++
        }
        while( j <= end ){
            temp[k] = array[j]
            k++
            j++
        }
        for( let l = start ; l <= end ; l++){
            array[l] = temp[l]
        }
       return array
    }
    let res = mergeSort(array , start , end)
    console.log(res)
  
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
// 	read = read.replace(/\n$/,"")
// 	read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`5
3 5 0 9 8`)