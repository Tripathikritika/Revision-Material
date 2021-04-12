1. Write a program to find if a given array of numbers is prime or not
   input => 1,2,3,5,4
   output => not prime,prime , prime, prime,not prime

   arr = [1,3,5,4,8,13,11,15,21,23].map(Number)
    function runProgram( arr ) {
        for( let i = 0 ; i < arr.length ; i++){
            if(isPrime(arr[i])){
                console.log(arr[i])
            }
            else{
                console.log("Not prime")
            }
            }
    function isPrime( n ){
            if( n === 1){
                return false
            }
            else if( n === 2){
                return true
            }
            else{
                for( let i = 2 ; i < n ; i++){
                    if( n % i === 0){
                        return false
                    }
                }
                return true
            }
        }
    }
   runProgram(arr)

2) What is JS? Is is asynchronous or synchronous?

3) What are callback hells?How to overcome them

4) What are closures With an example

5) What do u mean by setTime out and clear timeout

6) What is Creation phase and Execution phase in Javascript?

7) What do you mean by Time complexity .. yes

8) int a = 0, b = 0; 
    for (i = 0; i < N; i++) { 
        a = a + rand(); 
    } 
    for (j = 0; j < M; j++) { 
        b = b + rand(); 
    } 

==> Tc : O(N + M)
==> SC : O(1)
.. yes
9) What is the O/p ?
    i = 1
    j = 2
    while( (i< 25) && (j < 15)) 
    {
        i *= 2
        j *= 3
    }
    print( i*j )
==> 72

10) What is DOM?
On button Click, increase the count
https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici

11) const length = 4;
    const numbers = [];
        for (var i = 0; i < length; i++);{
            numbers.push(i + 1);
        }
==> 5

12) Name CSS Selectors with there signs

13) What do you mean by flex

14) Why Do we write Css link in head and Js link in body 

15) Html Full Form? Name some 10 Tags

16) What is Strict Mode in Javascript?