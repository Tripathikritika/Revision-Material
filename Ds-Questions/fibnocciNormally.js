function runProgram( input ) {

    input = Number(input)
    const arr = [0, 1]

    for (let i = 2; i <= input; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    console.log(arr[arr.length - 1]) // to print the last
    // console.log(arr) // to print the series
}

runProgram( 10 )