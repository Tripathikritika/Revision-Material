// object are collection of multiple values which are premitives
// which contains multiple properties
// create obj 

// var myObj = {};
// myObj.foo = 'values'
// we can add as many as properties in object
// console.log(myObj)

// JS is not class bassed
// object are key values pairs

// var myObj = {
//   "foo": "Value",
//   "age": 24,
//   "address": {
//     "street": "123 45",
//     "city": "JS",
//     "pincode": 12345
//   }
// }

// we can access obj by dot notation or bracket notation
// JS considered to be Object Oriented language

// employee management sys
var emp1 = {};
emp1.fname = "Sudhir";
emp1.lname = "Singh";
emp1.gender = "Male";
emp1.designation = "Engineering"

// So if we want to create a 100 object every time we have to create object 
// lets say we have to create a another employee so we have to do the exact same thing

var emp2 = {};
emp2.fname = "Sudhir";
emp2.lname = "Singh";
emp2.gender = "Male";
emp2.designation = "Engineering"

// create a functtion
function createEmployeeObject(fname, lname, gender, designation) {
  var newObject = {
    fname: fname,
    lname: lname,
    gender: gender,
    designation: designation
  }
  return newObject
}

var emp3 = createEmployeeObject('Abhay', 'Singh', "Male", "saftey officer")
console.log(emp3)

// we can  use contructor also
// let say we have to make emp for another department
// diff bw the ordinary fn and consturctor is u can also omit the line var obj and return obj statement by adding new keyword in front of new created object

// new means we are creating the new instance of the object
// new keyword is follow the function not class
// new keyword swithces to the construction mode and an able to JS to let do the shortcut

function CreateEmpObject(fname, lname, gender, designation) {
//   the new keyword does create the  object and retturn it which is represented by this
//   var this = {}
  this.fname = fname;
  this.lname = lname;
  this.gender = gender;
  this.designatioin = designation
//   return this
}

var emp4 = new CreateEmpObject("Sidhir", "Singh", "Male", "Officer")
console.log(emp4)


// diff bw constructor way and non construction way of creating object

// setup obj inline
// var bicycle = {
//   "cadence": 50,
//   "speed": 20,
//   "gear": 4
// }


// creating obj with normal fun
function createBicycle(cadence, speed, gear) {
  var newBicycle = {}
  newBicycle.cadence = cadence;
  newBicycle.speed = speed;
  newBicycle.gear = gear;
  return newBicycle
}

var bicycle1 = createBicycle(50, 20, 4)

var bicycle2 = createBicycle(20, 5, 1)
console.log(bicycle1, bicycle2)

// create function with constructor
// u always start with ur constructor with the Capital letter
function Bicycle(cadence, speed, gear) {
//   omit the two lines
//   var this = {}
//   return this
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
}

var bicycle3 = new Bicycle(50, 20, 4)

 console.log(bicycle3)

// constructor shold be called with new keyword

// let test to called the normal fucntion with new keyword and constructor with normal function invoke

// if we call normal funcation with new keyword so it will add two lines of code in function which is var this = {} and  return this


// var bicycle1 = new createBicycle(50, 20, 4)

// function createBicycle(cadence, speed, gear) {
// 	it will add here var obj = {}
//   var newBicycle = {}
//   newBicycle.cadence = cadence;
//   newBicycle.speed = speed;
//   newBicycle.gear = gear;
//   return newBicycle
// 	 return this
// }


// how will affect here so it will return the object which you initialize
// tow lines added by the new keyword will be wasted because of we are not using it
// its still works

// Trying to call constructor as the regular function with using a new keyword

// new keyword which added the two lines of code like var this = {} and return this

// so when we called constructor without the new keyword it will not added the two which is added previously
function Bicycle(cadence, speed, gear) {
//   this is refering to global object 
//   now property is added to  window object like cadence, speed, gear
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  
//   now there is no return value
}

// here this is refers to global object
var bicycle3 = Bicycle(50, 20, 4)
// default it contains the default undefined
// calling a constuctor function without the new keyword doesn't work! No new object get created, and the return value is undefined.



// Unit 2
// Undestanding the this reference
// four different ways of call function in JS
// We have seen two 
// 1. Regular ways
// 2. Constructor ways

// function declaration
function foo () {
    console.log('Foo')
  }
  
  foo();  // Method -1
  
  var obj = {}
  obj.foo = function () {
    console.log('Hello')
  }
  
  // to callin the this we have we use
  // refering to the obj of property
  obj.foo() //Method - 2
  
  new foo() //Method -3 in constructor
  
           //Method -4
  
  // Execution Context In JS
  // COntext is really depends of in which type this method is called like we have seen 4 ways of calling the method
  
  // there are two default arguments to every function call: arguments and this.
  
  // star with method#1
  function foo() {
    console.log("Hello")
    console.log(this)
  }
  foo();
  // here this is refering to global object
  // global object is here is window object
  
  
  // Method#2
  var obj = {"Prop": "this is object itself"}
  obj.foo = function () {
    console.log('Hello Obj')
    console.log(this)
  }
  
  obj.foo()
  // here this refers to obj(object)
  // I calling this in context of obj.
  
  
  // Method#3
  // use case -- constructor
  // calling standalone function using new keyword 
  // this reference --> the newly created object
  
  function foo() {
  //   when call new keyworf two is implicity added
  //   1. var this = {}
    console.log('Hello method 3')
      console.log(this)
  //   2. return this
  }
  
  var newFoo = new foo()
  // newFoo()
  // here this is refering to empty object
  
  
  // lets add method into constructor
  function Bicycle (cadense, speed, gear, tirePressure) {
    this.cadense = cadense;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    
  //   add method for increase the tire pressure
    this.inflateTires = function ()  {
      this.tirePressure += 3
    }
  }
  
  var bicycle1 = new Bicycle(50, 20, 4, 5)
  bicycle1.inflateTires()
  console.log("Bicycle", bicycle1)
  
  // this will work for multiple object too
  
  var bicycle2 = new Bicycle(20, 10, 2, 10)
  // in this case this is refers to bicycle1
  
  bicycle2.inflateTires()
  console.log("Bicycle", bicycle2)
  // in this case this is refers to bicycle2
  
  
  // make the method outside of objects
  // then it should be the part of another object
  
  function Mechanic (name) {
    this.name = name;
  }
  
  var mike = new Mechanic('Mike')
  console.log(mike)
  
  // give access to mike to inflate tyre any bike is given ot him
  
  mike.inflateTires = bicycle1.inflateTires
  // mike.inflateTires() // --->NaN 
  
  // how to apply here call property
  mike.inflateTires.call(bicycle1)
  
  // Method#4
  // using the property of function
  // call, apply, bind
  // both are same 
  // 1. foo()
  // 2. foo.call({pass the object})
  
  // call is taking a arguments which can be object
  // whats it does is take foo function and bind with object(this reference)
  
  

  // Unit#3
// Prototype
// prototype in JS which let you build object using template or blueprint
// all of language has class to build the template or blueprint but JS has not
// What JS does has concpet of prototype 
// JS objects don't have own methods. They just have properties, and any property could be a function
// there is new class keyword in the newer version of JS that simulates class-like behavior.But JS does not have the class concept

// lets say we have an Object
function Person (fname, lname) {
    this.fname = fname;
    this.lname = lname;
    
    this.getFullName = function () {
      return this.fname +" "+ this.lname
    }
  }
  
  var person1 = new Person('Sudhir', 'Singh')
  var person2 = new Person('Abhay', 'Singh')
  person1.getFullName()
  person2.getFullName()
  // let say we have a 1000 person so every time we have create a person object and all copies of properties. It will memory also
  
  // function is object in object
  // when the process the any fucntion  it create the two funciton object
  // tow object are created for every objects
  // 1. function object it self
  // 2. prototype object
  
  // let we have create the Function
  // function foo  () {}
  // 1. function object itself
  // 2. prototype
  
  // how to access the prototype
  // foo.prototype  
  
  // when we invoking the function with new keyword it create the anothere property __proto__
  // var f = new foo()
  // f.__proto__
  
  // __proto__ and prototype are the same
  
  // foo.prototype.test = "This is test prototype"
  // both gives the same results
  // foo.prototype.test
  // f.__proto__.test
  
  
  // foo.prototype === f.__proto__ //true beause of both are pointing to same object
  
  // let say ww have a object and we are looking for method then we try by boj.method_name so first obj check with itself if the method it no there then it check on its __proto__
  // it go on unless it the method or __proto__ referenciing to null
  
  
  function Employee (name) {
    this.name = name;
  }
  
  var emp1 = new Employee('Jim')
  var emp2 = new Employee('Pap')
  var emp3 = new Employee('Sud')
  
  Employee.prototype.playPrank = function () {
    console.log('Play Prank')
  }
  
  Employee.prototype.playPrank()
  emp1.playPrank()
  emp2.playPrank()
  emp3.playPrank()
  
  // all this happen during the run time
  // we can add the method during the run time
  Employee.prototype.greet = function () {
    console.log('Greet')
  }
  
  // emp1.greet()
  // emp2.greet()
  // emp3.greet()
  
  // lets get other prototype proterty knowledge
  function foo () {}
  // foo.prototype
  var f = new foo()
  // f.__proto__
  
  // the double_underscore are referred to as 'dunder' as in "Dunder Miffline". So, this property  is called 'dunder-proto'
  
  // we a another property constructor which is again point to function then again there prototype which referred to object
  
  var b = new f.__proto__.constructor
  // we want to check the new is create with this or f is instance of which function object
  // it is not recommeded to use
  
  
  
  
  
  
  
  
  
  function Emp () {}
var emp = new Emp()
emp.prop = "Employee"
emp.prop

emp.__proto__.parentProp = "Parent of Employee"
emp.parentProp
emp.__proto__.__proto__
// __proto__ when point to null then chain is end

function Employee (name) {
  this.name = name;
}
Employee.prototype.getName = function () {
  return this.name
}

var emp1 = new Employee('Sudhir')
emp1.getName()


function Manager (name, department) {
  this.name = name;
  this.department = department;
}

Manager.prototype.getDept = function() {
  return this.department
}

var mgr = new Manager("Michle", 'Sales')
mgr.getDept()
// mgr.getName() // did'n t work

mgr.__proto__.__proto__ = Employee.prototype

mgr.getName()

Employee.prototype.getSalary = function() {
  return 100
}

// emp1.getSalary()
mgr.getSalary()






















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  