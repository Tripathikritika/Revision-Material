let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d);

//{ greeting: 'Hello' }
//When you change one object, you change all of them.

