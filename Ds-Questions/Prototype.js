class Person {}
class Employee extends person {}
class Developer extends Employee {}
const tom = new Developer();

Object.getPrototypeOf(tom) === Developer.prototype; // A
Object.getPrototypeOf(tom) === Employee.prototype; // B
Developer.isPrototypeOf(tom); // C
Developer.prototype.isPrototypeOf(tom); // D
Employee.prototype.isPrototypeOf(tom); // E
Person.prototype.isPrototypeOf(tom); // F
Object.prototype.isPrototypeOf(tom); // G