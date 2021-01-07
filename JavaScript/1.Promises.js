/* Promise is a object that may produce a single value with either a resolved state or rejected state
It supports 2 property "STATE" "RESULT
1.Pending=> state-pending , result = undefinded--------default
2.Fullfilled => state-fullfiled , result = value-------completed
3.Reject => state-rejected , result=err----------------when rejected

SYNTAX=> const prom = new Promises((res) => {
    //description
})
prom.then((val) => {//description})
prom.catch((err) => {//description})

Why promises----- Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
PROMISES.ALL ----- It takes and array of promises as an input and it gets resolved once when all the promises gets resolved or any one of them get rejected.Order is maintained as per as input order
Syntax-> Promise.all([Promise1,Promise2,Pormise2])
            .then((val) => {console.log(val)})
            .catch((err) => console.log(err))

PROMISE.RACE---- Method will return the promise value wic ever gets resolved or rejected first.
eg: **

PROMISE CHAINING---The process of executing sequence of asycn tasks one after the another using promises.
*/
const promises = new Promise(res => {
    setTimeout(() => {
        res("I m promise")
    },1000)
}, rej => {
    rej("I m rejected")
})

// promises.then((val) => console.log(val))
//.catch((err) => console.log(err))

const prom  = new Promise(function(res, rej) {
    let task = true
    if(task){
        res("done")
    }
    else{

        rej("failed")
    }
})

prom.then((val) => console.log(val))
.catch(err => console.log(err))


/* ** */

var prom1 = new Promise(function(res,rej) {
    setTimeout((res)=>{
        console.log("I am promise 1")
    },100)
}, rej => {
    rej("I m rejected :(")
})

var prom2 = new Promise(function(res,rej) {
    setTimeout((res) => {
        console.log("I am promise 2")
    },500)
})

Promise.race([prom1,prom2,promises])
        .then((function(val){
            console.log(val)
        }))