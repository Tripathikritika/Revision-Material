//  a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
let arrOne = [12, 28, 46, 32, 50]
let arrTwo = [50, 12, 32, 46, 28]

function runProgram(){
    let output = []
    for(let i = 0 ; i < arrOne.length ; i++){
        for( let j = 0 ; j < arrTwo.length ; j++){
            if(arrOne[i] === arrTwo[j]){
                output.push(j)
            }
        }
    }
    console.log(output)
}

runProgram()