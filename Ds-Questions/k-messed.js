function sortKMessedArray(arr, k) {
// your code goes here
    for(let i = 0 ; i < arr.length ; i++){
        let key = arr[i]
        let j = i-1
        
        while(j >= 0 && arr[j] > key){
            console.log(arr[j])
            // arr[j] = 5 4 5 4 8 7 10
            arr[j+1] = arr[j]
            j = j - 1
        }
            arr[j+1] = key
    }
    // console.log(arr)
}
  
sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)

// j = -1 0 1 2 3 4 5 6 7 8
// key = 1 4 5 2 3 7 8 6 10 9

// arr = 1 