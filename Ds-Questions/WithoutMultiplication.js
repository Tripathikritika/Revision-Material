function runProgram( a ,b){
  
    console.log(mul( a , b))
//     let res= 0 
// //a = 5 b =5
//     for( let i = 1 ; i <= a ; i++){
//         res += b
//     }
//     // 5 * 5 == 5 + 5 + 5 + 5 + 5
    // console.log(res)

    function  mul(a , b) {
        if( a === 0 || b === 0){
            return 0
        }
        if( b === 1){
            return a
        }
        if( a === 1){
            return b
        }
        if(b > 0){
            return a + mul(a, b-1)
        }
        if( b < 0 ){
            return -mul(a, -b)
        }
    }
}

// 5 + mul(5,4) + mul(5,3) + mul(5,2) + mul(5,1)
//  mul(5,1) = 5 
//  mul(5,2) = 5 + [mul(5,1) = 5] => 5 + 5 = 10
//  mul(5,3) = 5 + [mul(5,2) = 10] => 5 + 10 = 15
//  mul(5,4) = 5 + [mul(5,3) = 15] => 5 + 15 = 20
//  mul(5,5) = 5 + [mul(5,4) = 20] => 5 + 20 = 25

runProgram( 5 , 5)