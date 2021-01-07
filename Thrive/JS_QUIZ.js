/*1
function getName(){
    var status = true
if(status){
    const name = 'masai'
}
console.log(name)
}
getName()

o/p : Reference error : 'name' is not defined
*/

/* 2
'use strict'
const name = "Masai"
function person(){
    console.log(name)
    name = "School"
}

person()
console.log(name) 

o/p : Masai , Type Error: Assignment to constant vaiable
*/

/* 3
function sum(x,y,z){
    return x+y+z
}
var res = sum(...[1,2,3,4,5,6,7])
console.log(res)

o/p : 6
*/

/* 4
!true || !true || true && true && !true

o/p : false
 */

 /*5  
function details({name,age,gender}){
    return `Name : ${name},
            Age : ${age},
            Gender : ${gender}`
}
user = {
    name : "John",
    age : 29,
    gender : 'male'
}
console.log(details(user))

o/p : Name : John,
      Age : 29,
      Gender : male
*/
/* 6
    var A = true
    var B = true
    !(A||B) == !A && !B
    false
*/

/* 7 

console.log(name)
const name = "Masai"

o/p : ReferenceError: Cannot access 'name' before initialization
*/

/* 8 
true == false || false == false

o/p : true
*/

/* 9 
const arr = [1,2,3,4]

arr = arr.map(function(a) { return a + 10})
console.log(arr)

o/p : TypeError : Assignment to constant variable 
*/

/* 10 
const sum = ( x , y ) => {
    x = x && 5
    y = y || 5
    return x+y
}
sum(20,5)

o/p : 10
*/

// 'use strict'
// let array = [1,2,3]

// const name = array
// name[0] = [4,5,6]
// value = name
// console.log(value)


// How does Javascript engine handle collision of module imports?

// function person(){
//     const name = "wrick"
//     console.log(name)
// }
// console.log(name)
// person()

// const num = [10,20,30]
// num[0] = [20,30,40]
// const num1 = num
// num1.push(60)
// console.log(num1 === num)

// let array = ['a' , 'b' , 'c' , 'd' , 'e']
// const func = function([f,...r]) {
// return r.reduce(function(a,c) {
// return a+c 
// }) + f } 
// console.log(func(array))


// const str = ['j' , 'w','p']
// let str1 = str
// str1 = [1,2,3]
// str1.push('m')
// console.log(str === str1)
// console.log(str1)


// const name
// name = "Masai"
// console.log(name)

let a = 1
let b = 2
[a,b] = [b,a]
console.log(a,b)