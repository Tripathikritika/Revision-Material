// JS is single threaded progreammin glaguage.
// which means sigle call stack
// can do one thind at time
// program can run sigle piece of code at one time

function multiply(a, b) {
    return a * b
}

function square (n) {
    return multiply(n, n)
}

function printSquare (n) {
    var squared = square(n)
    console.log(squared)
}

printSquare(4)

// CallStack --> its a datastructure which records where in the program we are
// so we step into a function, we put something on to the stack,
// If we return from a function, we pop off the 
// we run th code

// push function into stack like this
// main() -->  printSquare() --> square() --> multiply()
// now multipy will return a * b --> pop multipy() --> pop() sqare--> pop() printSquare()

// blowing the call stack

function foo() {
    return foo()
}

foo();

// callStack 
// main() -- foo()  -- foo()  -- foo()  -- foo()---infinite loop
// Maximumm call stack exceed

// callstack
// webapis
// task queue
// event loop 

// CallStack --->
// The call stack is a LIFO queue (Last In, First Out).
// which is used to store all the execution context created during the code execution.
// event loop continuosly checks the call stack to see if there's any function that needs to run.
// while doing so it adds any function call it finds to the call satck adn executes each one in order.
// JavaScript has a single call stack because it’s a single-threaded programming language. 
// The call stack has a LIFO structure which means that the items can be added or removed from the top of the stack only.
// Ex-
const second = () => {
    console.log('Hello there!')
}

const first = () => {
    console.log('Hi there!')
    second()
    console.log('The end')
}
first()

// event loop
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar()
    baz()
}

// When this code runs, first foo() is called. Inside foo() we first call bar(), then we call baz().
// execution -->main() --> foo() ---> console.log('foo') then pop out
// after that bar() ---> console.log('bar')  then poped from the stack
// after that baz() ---> console.log('baz') then poped from the stack
// then foo() -- popedout
// until the call stack empty

// The event loop on every iteration looks if there’s something in the call stack, and executes it:


// Queuing function execution
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}
// When this code runs, first foo() is called. Inside foo() we first call setTimeout, passing bar as an argument, 
// and we instruct it to run immediately as fast as it can, passing 0 as the timer. Then we call baz().


// The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. 
// If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, 
// which effectively runs it.

// The event loop, the web APIs and the message queue/task queue are not part of the JavaScript engine,
// it’s a part of browser’s JavaScript runtime environment or Nodejs JavaScript runtime environment (in case of Nodejs). 
// In Nodejs, the web APIs are replaced by the C/C++ APIs.
// ex-

const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 2000);
  };
  console.log('Hello World');
  networkRequest();
  console.log('The End');

// the console.log(‘Hello World’) is pushed to the stack and popped off the stack after it’s finished.
// Next, a call to networkRequest() is encountered, so it’s pushed to the top of the stack
// Next setTimeout() function is called, so it’s pushed to the top of the stack.
// The setTimeout() method starts a timer of 2s in the web APIs environment.
// At this point, the setTimeout() has finished and it’s popped off from the stack.
// After it, console.log('The End') is pushed to the stack, executed and removed from the stack after its completion.
// the timer has expired, now the callback is pushed to the message queue.
// callback is not immediately executed, and that’s where the event loop kicks in.

// EVENT LOOP
// The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. 
// If the call stack is empty, it looks into the message queue to see if there’s any pending callback waiting to be executed.
// the message queue contains one callback, and the call stack is empty at this point. So the Event loop pushes the callback to the top of the stack.
// After that the console.log(‘Async Code’) is pushed to the top of the stack, executed and popped off from the stack.


// Synchronous basically means that you can only execute one thing at a time.
// Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.