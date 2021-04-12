1.  int count = 0;
    for(int i = 0; i < 4; i++){
    for(int j = 4; j > 0; j--){
    if(i + j == i \* j){
    count += 1;
    }
    }
    }
    print(count)

==> 1
...no

2. TC
   int a = 0, i = N;

while (i > 0) {

    a += i;

    i /= 2;

}
==> O(longn)
..no 3) Write a program to reverse a sentence like A Transformation in education becomes education in Transformation A

function runProgram( str ){
str = str.split(" ")

    for( let i = 0 ; i < str.length/2 ; i++){
        let temp = str[i]
        str[i] = str[str.length-1-i]
        str[str.length-1-i] = temp
    }
    console.log(str.join(" "))

}

runProgram("A Transformation in education")
..no 4) On button Click, increase the count
.. partially

5. What is an Event Loop?
   .. no diagram
6. Closures
   .. no
7. Css link
8. Semantic
9. Closing Link
10. Selectors
11. Hoisting..
