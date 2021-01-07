// function Person(name,age) {
//     this.name = name
//     this.age = age    
// } 
//     Person.prototype.display = function() {
//         console.log(this.age)
//     }
// const personOne = new Person("Kritika",22) //calling constr
// const personTwo = new Person("Shubham",32) //calling constr

// console.log({personOne},{personTwo})

// personOne.display()
// personTwo.show()

class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    display() {
        return (`${this.name} is ${this.age} years old!`)
    }
}
class Person extends Student{
    constructor(name,age,place){
        super(name,age)
        this.place = place
    }
    
}

const studentOne = new Student("O",22)
const personOne = new Person("df",22,"bgh")
console.log(personOne)