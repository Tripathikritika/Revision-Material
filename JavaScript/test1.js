// // function outerClouser(){
// //     var a= 10
// //     function innerClouser(){
// //         console.log({a})
// //     }
// //     return innerClouser
// // }

// // outerClouser()()

// // const outer = () => {
// //     var b = 10
// //     const inner = () => {
// //         console.log({b})
// //     }
// //     return inner
// // }
// // outer()()

// var a = [1,2,3]
// var sqr = a.map((item) =>  (item*item) )
// // console.log(sqr)

// function map(a){
//     for( var i = 0 ; i < a.length ; i++){
//         console.log(a[i]*a[i])
//     }
// }

// var let const 

// let a = 10
// b()
// function b(){
//     console.log(a)
//     let a = 20
// }

// pending - undefined
// fulfilled - value
// reject - err
// .then()
// // const prom = new Promise(function(res,rej) => 
// // )


var gret = "hello"
var greeting = "There"

function invite(){
    console.log(this.gret + this.greeting)
}

console.log( )