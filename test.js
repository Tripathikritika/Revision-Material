// // function fib(num) {
// //     for( let i = 0 ; i <= num ; i++){
// //         console.log(recusrsion( i ))
// //     }
// //     function recusrsion(n) {
// //         if( n <= 1){
// //             return n
// //         }
// //         else{
// //             return recusrsion(n-1) + recusrsion(n-2)
// //         }
// //     }
// // }
// // fib( 5 )

// // function fac(num) {
// //     let x = 1
// //     for( let i = num ; i > 0 ; i--){
// //         x = x * i 
// //         console.log(x)
// //     }
// // }

// // fac(5)

// // function palidrome(str) {
// //     str = str.split("")
// //     for( let i = 0 ; i < Math.floor((str.length)/2) ; i++){
// //         if(str[i] !== str[str.length-1-i]){
// //             // madam
// //             console.log("Not palindrome")
// //             return
// //         } 
// //     }
// //     console.log("palindrome")
// // }

// // palidrome("madfam")

// // function bubbleSort(arr) {
// //     // 1 2 3 6 7
// //     arr = arr.trim().split(" ")

// //     for( let i = 0 ; i < arr.length-1 ; i++){
// //         for( let j = 0 ; j < arr.length-i-1 ; j++){
// //             if(arr[j] < arr[j+1]){ //  3 > 1
// //                 let temp = arr[j]
// //                 arr[j] = arr[j+1]
// //                 arr[j+1] = temp
// //             } 
// //         }
// //     }
// //     console.log(arr)
// // }
// // bubbleSort(`2 3 1 6 7`)

// function Book(title){
//     this.title = title
//     console.log(this)
//   }
//   const newBook = new Book('PS I love you')

// function throttle(func, duration) {
//   let shouldWait = false
//   return function (...args) {
//     if (!shouldWait) {
//       func.apply(this, args)
//       shouldWait = true
//       setTimeout(function () {
//         shouldWait = false
//       },0)
//     }
//   }
// }

let count = 0;
	for(let i = 0; i < 4; i++){
		for(let j = 4; j > 0; j--){
			if((i + j) == (i * j)){
				count += 1;
			}
		}
	}
console.log(count)