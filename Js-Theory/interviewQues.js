// 1. Ques
console.log([] + [])  // --> '' empty string
// here [] treated as empty string 

// 1. Ques
function a() {
    return 'Hello'
}

// a `hi` ==> a (`hi`) --> function and pass ars into it
const sentence = a `hi`
console.log(sentence)

// 1. Ques
// how you can edit a any webpage like wikipedia name to sudhir
// add property like (contenteditable="true")

{/* <div constenteditable="true">Hello</div> */}

// 1. Ques
function y() {
    console.log(this.length)
} 

// var x = {
//     length: 5,
//     method: function (y) {
//         arguments[0]() //invoking the function
//     }
// }
// x.method(y, 1) //y is this funtion, 

// 1. Ques
const x = 'constructor'
console.log(x[x](01))
// x[constructor](01)
// function String(01) --> 1

// x[constructor] == x.constructor
var s = new String('constructor')
console.log(s) // get obj
console.log(s.constructor) // return func string


// 1. Ques
console.log(0.1 + 0.2 )  // 0.30000000004

// 1. Ques
console.log(('hi').__proto__) // --> String object
console.log(('hi').__proto__.__proto__) // --> constructor
console.log(('hi').__proto__.__proto__.__proto__) // null


// 1. Ques
// funtion returns total number of arguments
// do not use loops
// let x = function () {
//     return [].slice.call(arguments).length  
// }
// console.log(x(1,2,3,4,5))  //-->5


// 1. Ques
var A = {
    x: function () {
        console.log('x')
        return A
    },

    y: function () {
        console.log('y')
        return A
    },

    z: function () {
        console.log('z')
        return A
    },
}
A.x().y().z()  // x  y  z

// 1. Ques
console.log(2 + '2') // 22  '+' can apply only string and number
console.log(2 - '2')  // 0  -> - operator can apply only on number convert str --> number

// 1. Ques
let nums = [1,2,2,3]
console.log([...new Set(nums)])

// 1. Ques
let func = function () {
    
    // block
    // {
    //     let l = 'let' // not hoisted and block scope
    //     var v = 'var'  // hoist  and function scope
    // }

    // if want to make a var to block scope we have wrap into func and inviked it immediately
    {
        (function () {
            let l = 'let' // reference error --> l is not defined 
            var v = 'var' // reference error --> v is not defined
        })()
    }

    console.log(v)
    console.log(l) // --> l refenence and is no defined let will not avilable here because it's has bloack scope
}
func()

// 1. Ques
console.log(5 < 6 < 7) //  true  --> 5 < 6 --true(1) --1 < 7 true
console.log(7 > 6 > 5) //  false --> 7 > 6 -- true(1) --1 > 5 false

// 1. Ques
// let a =  () => {return arguments}
let a =  function () {return arguments}

console.log(a('hi'))

// arguments dosn't bind with arrow function that's why it will return argumenst without 'hi'
// dont use arguments inside the arrow function

// 1. Ques
 let z = function () {
    //  automatic insert a semicolon return;
     return  // -->it will line break and return undefind
     {
        message: 'hi'
     }

    //  toget the op and it will return the obj
    return {
        message: 'hi'
    }
 }
console.log(x())

// 1. Ques
let profile = {
    name: "Sudhir"
}
Object.freeze(profile) // -->it will not allow to add any property into the profile obj

// dont allow to add property? how to do that?--> freeze method
profile.age = 3

// if we are going to modify the name property it will also not allow to change
// how do allow user to modify but not add property -->seal methods
Object.seal(profile)
profile.name = "Singh" //it will change sudhir - singh

// what if we have two property name and  age 
// allow name to modify and no allow to age to modify
Object.defineProperty(profile, 'age', {
    value: 3,
    writable: false
})
profile.name = "sudhir"
profile.age = 5

// 1. Ques
console.log(Math.max())  // -infinity
// because it compare to -Infinity to other number 

// 1. Ques
// 1. Ques
// 1. Ques
// 1. Ques
// 1. Ques
// 1. Ques
