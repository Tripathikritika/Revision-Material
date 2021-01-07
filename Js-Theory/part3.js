// What is promises?
// How to explain
// promises is way to handle a synchronous nature or asynchronous call
// Explain what, why, how
// promises has 3 state -> fullfilled, rejected, pending
// why --> quite painful to work with nested callback in asynchronous that's why we used promises
// sleep(2000)
// .then(operation1)
// .then(operation2)
// .then(operation3)
// .then(operation4)
// .catch(error1)
// .catch(error2)
// .finally(op)

// ex-1
// function sleep(time) {
//     return new Promise((res, rej) => {
//         if (typeof time !== 'number') {
//             rej('arguments to sleep function to should be number')
//             return 
//         }
//         setTimeout(() => {
//             res({status: 200})
//         }, time)
//     })
// }

// queue ex
// setTimeout(() => {
//     console.log('first')
// }, 0)
// Promise.resolve()
// .then(res => console.log('Promise'))

// Here promise called first it's always gives high piority to Promises
// queue ex

// sleep('2000')
// .then(res => console.log('called after 2s'))
// .catch(err => console.log(err))

// async function
// always write synch functioon into try and catch block
// ssync await comes after promises

// async function test() {
//     try {
//         console.log('Waiting for results')

//         let res = await sleep(2000)
//         console.log(res)
    
//         if (res.status === 200) {
//             return true
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }
    
// }

// test()
// .then(res => console.log(res))


// want to do multiple parallel call --> there are 2 types
// parallel request --> 20 requests
// Promises.all(promise1, promise2, promise3 etc..).then(res => console.log(res))
// function sleep(time) {
//     return new Promise((res, rej) => {
//         if (typeof time !== 'number') {
//             rej('arguments to sleep function to should be number')
//             return 
//         }
//         setTimeout(() => {
//             res({status: 200})
//         }, time)
//     })
// }

// 1st way
// var promise1 = sleep(100).then(res => 'Posmise1')
// var promise2 = sleep(500).then(res =>  {
//     throw new Error('Error Message')}).catch(err => err)
// var promise3 = sleep(1000).then(res => 'Posmise3')
// var promise4 = sleep(2000).then(res => 'Posmise4')

// Promise.all( [promise1, promise2, promise3, promise4] ).then(res => console.log(res))

// 2nd way
// var promise = []
// promise[0] = sleep(100).then(res => 'Posmise1')
// promise[1] = sleep(500).then(res =>  {
//     throw new Error('Error Message')}).catch(err => err)
// promise[2] = sleep(1000).then(res => 'Posmise3')
// promise[3] = sleep(2000).then(res => 'Posmise4')

// Promise.all( promise ).then(res => console.log(res))



// waterfall model --> first 1st req --> then 2nd req --> 3 req.....
// async await, recursion is used to get the waterfall job done

// let
// block scoped, redeclaration and hoisting dosn't allow
// let name = "masai"

// const
// reassignment, redeclaration is no allowed and block scoped
// const lname = 'school'

// function test() {
//     // hoisting takes place
//     let name
//     console.log(name)
// }


// Arrow function
// create a sugar syntaxing, esier way to write a functions
// its handle this keyword better
// ex-->

// var person = {
//     name: 'masai',
//     displayES6: () => console.log(this.name),
//     displayES5: function () {
//         console.log(this.name)
//     }
// }

// throw a error with undefined in es6
// person.displayES6()
// in es5 it's maintain the contex
// person.displayES5()


// call, apply  and bind

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state  = {
//             data: [1, 2, 3]
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     // handleClick() {
//     //     console.log(this.state)
//     // }

//     // to get rid to bind we can use arrow function
//     handleClick = () => {
//         console.log(this.state)
//     }
// }



// Prototype
// it's mechanism to inherit the property of other object
// OOPs in JS called OODO --> object oriented delegation programming 
// id we want to create prototype chain 
// creaate constructor

// function Person (name, age) {
//     this.name = name,
//     this.age = age
// }

// Person.prototype.display = function() {
//     console.log(this.name)
// }

// var person = new Person('masai', 25)
// person.display()
// console.log(person)

// CLASS--> class declaration creates a new class with given name using prototype-based inheritance.
// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }
//     sleep() {
//         console.log(this.name, ' is sleeping')
//     }
// }

// // extend class
// class Coder extends Person {
//     constructor(name, age, role) {
//         // superis calling the parent constructor
//         super(name, age)
//         this.role = role
//     }

//     code() {
//         console.log(this.name, ' is coding')
//     }

//     role() {
//         console.log(this.name, ' role is ', this.role)
//     }
// }

// var person = new Person('masai', 50)
// var coder = new Coder('Sudhir', 25, 'FrontEnd')
// coder.code()
// coder.sleep()
// coder.role()
// console.log(coder)

// Bigint
// normals
// var value = 2 ** 53 - 1
// for bigint
// var val = 2n**53n - 1n
// console.log(val + 2n)

// EVENT LOOP
// 2-5 min ans
// JS is synchronous language
// async
// call stack, WEB API
// task queue
// if the callstack is not empty, then task queue is not pushing out the element
// Promise is higher priority
// Priority queue
// setTimeout(() => {
//     console.log('First')
// }, 0);
// first promise executed because of priority queque
// Promise.resolve()
// .then(res => console.log('promise'))


// THIS
// this refers to an object itself
// call, apply, bind
// functions, this is created function invoked

// objects and arrys
// var arr = []
// var obj = {
//     name: 'masai',
//     place: 'patna'
// }

// both returns object
// console.log(typeof arr, typeof obj)

// to check arr --> return true
// console.log(Array.isArray(obj))

// to check property --> it will retrun boolean
// console.log(obj.hasOwnProperty('name'))
// console.log(Object.getOwnPropertyNames(obj))


// diff bw axios and fetch