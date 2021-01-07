// //If the new keyword is used when calling the function, 
// //this inside the function is a brand new object.
// function ConstructorExample() {
//     console.log(this);
//     this.name = 'Richa';
//     this.age = 10;
//     console.log(this.name);
// }
// new ConstructorExample();
// /*
// {}
// { value: 10 }
// */
// //If apply, call, or bind are used to call/create a function, this inside 
// //the function is the object that is passed in as the argument.
// function fn() {
//     console.log(this);
// }
// var obj = {
//     value: 5
// };
// var boundFn = fn.bind(obj);
// boundFn();     
// fn.call(obj);  
// fn.apply(obj);

// /*
// { value: 5 }
// { value: 5 }
// { value: 5 }
// */

// //If a function is called as a method, such as obj.method() — 
// //this is the object that the function is a property of.
// var obj = {
//     value: 5,
//     name:'Kritika',
//     printThis: function() {
//         console.log(this);
//     }
// };
// obj.printThis();

// /*
// { value: 5, printThis: ƒ }
// */

// // If a function is invoked as a free function invocation, meaning it was invoked without 
// //any of the conditions present above, this is the global object
// function fn() {
//     console.log(this);
// }

// fn();

// arrow function
const obj = {
    value: 'abc',
    createArrowFn: () => {
        return () => console.log(this);
    }
};
const arrowFn = obj.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }