// function runProgram( paliValue ){
//     paliValue = paliValue.split("")
//     let len = paliValue.length

//     for( let i = 0 ; i < Math.floor(len/2) ; i++){
       
//         if( paliValue[i] !== paliValue[len-1-i]){
//             console.log("No")
//             return
//         }

//     }
//     console.log("yes")
// }
// runProgram( "madam")

function runProgram( str ){
    str = str.split("")
    for( let i = 0 ; i < Math.floor(str.length)/2 ; i++){
        if(str[i] != str[str.length-i-1]){
            console.log("No")
            return
        }
    }
    console.log("Yes")
}
runProgram( "madam")

/*
0 1 2 3 4
m a d a m

str[0] !== str[5-0-1] => str[0] != str[4] => m != m
str[1] !== str[5-1-1] => str[1] != str[3] => a != a
d
therefore its a palindrome
*/