function runProgram( n ){
    n = Number(n)

    if (n < 2) {
        return n;
    }

    let lo = 0
    let hi = n
    let answer = 0

    while(lo <= hi){
        let mid = (lo + hi)/2
        let midValue = mid * mid
        if( midValue === n ){
            
            return mid
        }
        else if( midValue < n){
            lo = mid + 1
            answer = mid
        }
        else{
            hi = mid - 1
        }
    }
    return answer

}

console.log(runProgram( 25 ))
// 1 2 3 4 5
// mid = 3 => 9 > 5
// hi = 3