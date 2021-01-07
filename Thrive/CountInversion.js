function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let size = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number)
    let start = 0
    let end = size-1
    
    //1 3 5 2 4 6 
    // 3,2 5,2 5,4 = 3
    // s =0 end = 5 
    function merge_sort(arr,start,end){
        let count = 0 
        if(start < end){ // 0< 5
            let mid = Math.floor((start+end)/2) // 
            merge_sort(arr,start,mid)
            merge_sort(arr,mid+1,end)
            count += mergeSortFunction(arr,start,end)
        }
        return count
    }
    function mergeSortFunction(arr, start,end) {
        let count = 0
        let mid = Math.floor((start+end)/2)
        // left array is from start till mid
        // right array is from mid+1 to end
        let i = start // starting point for left side array
        let j = mid + 1 // starting point for right side array
        let k = start // index for temp array
        let temp = []

        while( i <= mid && j <= end){
            if(arr[i] > arr[j]){ 
                temp[k] = arr[j] // pushing the smallest in temp with corresponding index
                k++ 
                j++
                count = count + (mid-i+1) // inversion count is calculated
            }
            else{
                temp[k] = arr[i] // pushing the smallest in temp with corresponding index
                k++
                i++
            }
        }
        while( i <= mid){
            temp[k] = arr[i]
            k++ 
            i++
        }
        while(j <= end){
            temp[k] = arr[j]
            k++ 
            j++
        }
        for( let l = start ; l <= end ; l++){
            arr[l] = temp[l]
        }
        return count
    }

   console.log(merge_sort(arr,start,end))
//    console.log(count)
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

runProgram(`6
1 3 5 2 4 6`)