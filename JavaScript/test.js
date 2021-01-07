// const prom  = new Promise(function(res, rej) {
//     let task = false
//     if(task){
//         res("done")
//     }
//     else{

//         rej("failed")
//     }
// })

// prom.then((val) => console.log(val))
// .catch(err => console.log(err))



// function getName(){
//     var status = true
//     if(status){
//         var name = "masai"
//     }
//     console.log(name)
// }

// getName()

// for( var i = 0 ; i <= 5 ; i++){
//     setTimeout(function asyn(){
//         console.log(i)
//     },i*1000)
// // }

// const prod = ( x )=>{
//     x = x+5
//     return inner => (
//         x * inner
//     )
// }

// console.log(prod(5)(10))

// const sum = (x,y) => {
//     x = x && 5
//     y = y || 5
//     return x + y
// }
// console.log(sum(20,5))

// var name = "Ajay"

// function printDetails(){
//     console.log(this.name)
// }
// var person = {
//     name : "haren",
//     company : "masai",
//     print : printDetails()
// }
// person.print()

// 'use strict'
// function printDetails(){
  
//     console.log(this.name)
// }
// var person = {
//     name : "haren",
//     company : "masai",
//     print : printDetails()
// }
// person.print()
// var name = "Ajay"

function getName(){
    name = "albert"
}
getName()
console.log(name)

// function value(b){
//     const a = 100
//     a=b
//     return a
// }
// console.log(value(100))

// foo()
// function foo(){
//     console.log("hello")
// }

// const sum = ( x , y) => {
//     x = x || 5
//     y = y || 10
//     return x + y
// }
// console.log(sum(0,10))

// function alpha(){
//     var x = 100
//     this.beta()
// }

// function beta(){
//     var x = 200
//     console.log(this.x)
// }
// alpha()

// const arr = [10,12,15,21]
// for( var i = 0; i< arr.length;i++){
//     setTimeout(function(){
//         console.log("Index" + i + " ,  element: " + arr[i])
//     },3000)
// }

// function cont(x){
//     var y = x*10
//     function val(z){
//         console.log(x,y,z)
//     }
//     val(y*5)
// }

// // cont(3)
// var str = 'masai'
// var {length} = str
// console.log(length)

// name = x || 'name'
// console.log(name)
// var x = "Masai"