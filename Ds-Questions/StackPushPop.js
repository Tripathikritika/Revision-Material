let arr = []

function pushInStack( n ){
    arr[arr.length] = n
    console.log(arr)
}

function popInStack(){
    let l = arr.length-1
    arr.length = l
    console.log(arr)
}

pushInStack(3)
pushInStack(4)

popInStack()
popInStack()

let array = [1,2,3,4]