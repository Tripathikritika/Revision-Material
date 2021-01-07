function sleep(time) {
    return new Promise((res, rej) => {
        if(typeof time !== "number") {
            rej('Please enter the time correct format')
        } else {
            setTimeout(() => {
                res(5000)
            }, time)
        }
    })
}

let p = [sleep(1000), sleep(3000), sleep(5000)]
Promise.all(p)
.then(res => console.log(res))
.catch(err => console.log(err))

// sleep(1000)
//     .then(res => {
//         console.log(res)
//         return sleep(res)
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
