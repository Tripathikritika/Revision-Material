// // 'use strict'

// // function name() {
// //     var name = 'masai'
// //     console.log(this.name) 
// // }

// // function greet(){
// //     console.log("hello")
// // }

// // var arr = [{name : 'Nrupal'},
// //            {name : "Aman"},
// //            {name:"Albert"}]
// // for( var i  = 0 ; i < arr.length ; i++){
// //     setTimeout( name.bind(arr[i]),0)
// //     setTimeout(greet() , 0)
// // }

// // console.log(typeof[1,1,1] === typeof{val:1,val:1,val:1}) // true

// // function getName(){
// //     var status = true
// //        if(status){
// //             var name = 'masai'
// //         }
// //     console.log(name)
// // }
// // getName()

// // //masai

//  a(10)

//  function a(i){
//     console.log("Hello")
//  }

// // function outer(){
// //     a = 20
// //     function inner(){
// //         a = 30
// //         function innnerKaInner(){
// //             console.log(a)
// //         }
// //         console.log({a})
// //         return innnerKaInner
// //     }
// //     return inner
// // }

// // outer()()()

function getName(){
    var status = true
       if(status){
            const name = 'masai'
        }
    console.log(name)
}
getName()