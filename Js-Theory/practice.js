// sleep('2000').then(res => console.log(res)).catch(err => console.log(err))


// function sleep(time) {
//     return new Promise((res, rej) => {
//         if (typeof time !== 'number') {
//             rej('time shold be in number')
//         }
//         setTimeout(() => {
//             res({status: 200})
//         }, time);
//     })
// }

// async function test() {
//     let res = await sleep(2000)
//     console.log(res)
// }

// test()


// let toggle = toggler( 1,2,3)

// function toggler (...args) {
//     return function () {
//         console.log(...a)
//     }
// }

// let toggle = toggler(1, 2, 3)
// console.log(toggle(1))

// toggle()
// // 1
// toggle()
// // 2
// toggle()
// // 3

// var obj = {
//     age: 42,
//     counter: function counter() 
// }


// const Parent = function () {
//   this.name = 'Parent'
// }

// Parent.prototype.greet = function () {
//   console.log('Hello Parent')
// }

// const child1 = new Parent()
// const child2 = Object.create(Parent.prototype)

// child1.cry = function () {
//   console.log('child')
// }

// console.log(child1)
// child2.greet()

// (function foo () {} )();
// (function foo() {} ())
// console.log(a)
// // 'use strict'
// a = 5
// console.dir(a)

// let a
// console.log(a)
// console.log(typeof a === 'undefined')


// function Person (name) {
//   this.name = name;
// }

// var person = new Person('Sudhir')
// console.log(person) // undefined
// console.log(person.name)


// function sum (a,b) {
//   return a + b
// }

// console.log(sum.call(null, 1, 2))
// console.log(sum.apply(null, [1, 2]))



// console.log(foo)
// var foo = 1
// console.log(foo)


// foo()
// function foo() {
//   console.log('foo')
// }
// foo()

// foo()
// var foo = function () {
//   console.log('foo')
// }
// foo()

// function duplicate(arr) {
//   return arr.concat(arr)
// }
// const duplicate = (arr) => [...arr, ...arr]
// console.log(duplicate([1,2,3]))


// for (let i = 0; i <= 100; i++) {
//   let f = i % 3 == 0,
//       b = i % 5 == 0;
//   console.log(f ? (b ? 'Fizzbuzz': 'Fizz'): b ? 'Buzz': i)
// }

// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// const arr = ['a','b','c','d']

// for (let [index, ele,] of arr.entries()) {
//   console.log(index, ':', ele)
// }


// function Person (name) {
//   this.name = name;
// }

// function Student(name, stdId) {
//   Person.call(this, name)
//   this.stdId = stdId
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student;
// Student.prototype.print = function () {
//   console.log('Hello std')
// }

// const sud = new Student('Sudhir', 2)
// console.log(sud)
// sud.print()

// class Person {
//   constructor(name) {
//     this.name = name
//   }
  
// }

// class Student extends Person {
//   constructor(name, stdId) {
//     super(name);
//     this.stdId = stdId
//   }
  
//   print () {
//     console.log('Hello std1')
//   }
// } 


const sud = new Student('Sudhir', 1)
sud.print()
console.log(sud.stdId)




var count = 0
var toggler = function () {
  let args = arguments
  return function () {
    console.log(args[count])
    count += 1
  }
}
var toggle = toggler(1,2,3,4)

toggle() //1
toggle() //2
toggle() //3
toggle() //3


