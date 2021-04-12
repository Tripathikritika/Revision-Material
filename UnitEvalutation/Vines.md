1. Write a program to print all substrings of a string
   let arr = 'abcd'

function runProgram(){
for( let i = 0 ; i < arr.length ; i++){
for( let j = i ; j < arr.length ; j++){
let subArray = arr.slice(i,j+1)
console.log(subArray)
}
}
}

runProgram()
// input = abcd
// output = a ab abc abcd b bc bcd c cd d

2. What is Time complexity?
   int a = 0, b = 0;
   for (i = 0; i < N; i++) {
   a = a + rand();
   }
   for (j = 0; j < M; j++) {
   b = b + rand();
   }

==> Tc : O(N + M)
==> SC : O(1)

3. int a = 0, i = N;

while (i > 0) {

    a += i;

    i /= 2;

}
==> O(longn)

4. let i = 0
   while( i < 100 ) {
   if( i % 15 == 0){
   i = i * 5
   }
   i = i + 2
   }
   console.log(i)

==> 152

5. Hide - unhide an image on click
   https://stackoverflow.com/questions/45406735/how-can-i-unhide-an-image-when-a-button-is-clicked/45406804

6. console.log(0.1 + 0.2 === 0.3)
   false

7. console.log(1 < 2 < 3); true
   console.log(3 > 2 > 1); false

8. What is closure

9. Event loop with diagram

10. What is Strict Mode in Javascript?

11. What is JS and wheather it is asynchronous and synchronous

12. What is Html and Css Full form?

13. Set timeout

14. Call back and callback hells

15. What is the difference between slice and splice

16. 10 tags of html
