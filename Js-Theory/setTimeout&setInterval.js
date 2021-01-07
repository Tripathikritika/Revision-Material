// setTimeout

// the setTimeout method sets a timer which executes a function or specified
// piece of code after the timer expires.
// the funciton is execute only once.
// it returns a positive integer value which indentifies the timer created by the call to settimeout.
// the value passed can be passed to clearTimeou() to cancle timeout


// setTimeout(() => {
// //    code
//     console.log('object')
// }, 2000);


function add(x, y) {
    console.log('Hello')
    // console.log(x + y)
}

// setTimeout(add(), 2000, 2, 3);
var timeoutID = setTimeout(() => {
    console.log('Hello')
}, 5000);

// console.log(time)


// clarTimeout() -->
// the clearTimeout method cancels a timeout previously established by calling setTimeout().
clearTimeout(timeoutID)


// setInterval
// the setInterval method repeatedly calls a function or executes a code snippet, 
// with a fixed time delay between each call.
// it returns an interval id which uniquely indentifies the interval, so we can remove it later.
//  clearInterval() -->methods is used to clear setInterval
// syntx----- setInterval(function, milisec, para1, para2)
// var intervalID = setInterval(show, 2000)


// ClearInterval --->
// the clearTimeout method cancel a timed, repeating action which was previously established by a call to setInterval;
// clearInterval(intervalID)

var intervalID = setInterval(() => {
    console.log('Hello')
}, 2000);

// clearTimeout(intervalID)