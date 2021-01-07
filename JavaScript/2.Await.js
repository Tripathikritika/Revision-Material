/* Async-- makes function return promises
Await -- makes a function to wait for a promise 
SYNTAX---- async function name([param[, param[,..param  ]]]){
    //stmt
}
Await cant be used outside async/await  */


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  
