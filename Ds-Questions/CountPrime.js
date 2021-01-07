function runProgram(n){
    n = Number(n)
    let count = 0
    for( let i = 1 ; i <= n ; i++){
        if(isPrime(i)){
            count++
        }
    }
    console.log(count)
    function isPrime(n) {
      if(n === 2){
        return true
      }
      else if(n === 1){
          return false
      }
      else{
          for( let i = 2 ; i < n ; i++){
              if( n % i === 0){
                return false
              }
          }
          return true
      }

    }
}
// 4 % 2 === 0 prime
runProgram("10")

// 1 2 3 4 5 6 7 8 9 10
// 2 3 5 7 