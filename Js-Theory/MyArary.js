function MyArray () {
    // so we remove the this.length and the defineProperty
    // this.length = 0

    Object.defineProperty(this, 'length', {
        value: 0,
        enumerable: false,
        // give acces to edit add the writeable property
        writable: true
    })
}

//  for in obj ===> like we will get length, push , pop
// Its loops through all eumerable properties of an object

// push
MyArray.prototype.push = function (elem) {
    this[this.length] = elem
    this.length++
    return this.length
}

// pop 
MyArray.prototype.pop = function () {
    this.length--
    var popElem = this[this.length]
    delete this[this.length]
    return popElem
}

// map ===> its taking thecallback
MyArray.prototype.map = function(callBack) {
    var result = new MyArray()
    for (index in this) {
        if (this.hasOwnProperty(index)) {
            result.push(callBack(this[index], index, this))
        }
    }
    return result
}

// forEach ==>
MyArray.prototype.forEach = function (callBack) {
    for (index in this) {
        // console.log(this[index])
        if (this.hasOwnProperty(index)) {
            callBack(this[index], index, this)
        }
    }
}

// filter
// sort
// reduce
 
var arr = new MyArray()
arr.push(1)
arr.push(2)
arr.push(3)
// arr.pop()
arr.forEach(ele => {
    console.log(ele * 5)
})
// console.log(arr[0],arr[1], arr[2])
// console.log(arr)

// enumerable properties
// for (key in arr) {
//     console.log(key)
// }
var newArr = arr.map(function(val) {
    return val * 5
})

// console.log(newArr)