function runProgram(input){

    input = input.split("\n")
    let n = Number(input[0])
    let q = Number(input[1])
    let query = input[2].split(" ")
    let queue = []
    
    for( let i = 0 ; i < query.length ; i++){
        
        if(query[i] === "SET"){
            if(queue.length == n){
                queue.shift()
            }
            queue.push(["SET" , query[i+1] , query[i+2]])
        }
        else if( query[i] === "GET"){
            console.log(queue)
            let val = -1
            for(let j = queue.length-1 ; j >= 0 ; j-- ){
                if(queue[j][1] == query[i+1]){ 
    // array of array hai isliye hum usse queue[j][1]
                    val = queue[j][2]
                    break
                }
            }
            console.log(val)
        }
    }

}

runProgram(`2
7
SET 1 2 SET 2 3 SET 1 5 SET 4 5 SET 6 7 GET 4 GET 1`)


/* 
 1     2
key:1 : value:2

*/