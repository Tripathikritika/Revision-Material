// wrap the whole thing in to another funciton

// function Person(name, energy) {
//     var person = {}
//     person.name = name
//     person.ernery = energy
    
//     person.eat = function (amount) {
//         console.log(this.name, "is eating")
//         this.ernery += amount
//     } 
    
//     person.sleep = function (time) {
//         console.log(this.name, "is sleeping")
//         this.ernery += time
//     }
    
//     person.code = function (time) {
//         console.log(this.name, "is coding")
//         this.ernery -= time
//     }

//     return person
// }

// var sud = Person("Sudhir", 20)
// var ash = Person("Ashish", 15)
// console.log(sud, ash)
// sud.code(10)
// ash.sleep(15)

// to store the method into another object 
// var personMethods = {
    // eat: function (amount) {
    //     console.log(this.name, "is eating")
    //     this.energy += amount
    // },
    
    // sleep: function (time) {
    //     console.log(this.name, "is sleeping")
    //     this.ernery += time
    // },
    
    // code: function (time) {
    //     console.log(this.name, "is coding")
    //     this.ernery -= time
    // }
// }

// function Person(name, energy) {
//     var person = Object.create(personMethods)
//     person.name = name
//     person.energy = energy
//     return person
// }


// var sud = Person("Sudhir", 20)
// var ash = Person("Ashish", 15)
// console.log(sud, ash)
// sud.code(10)
// ash.sleep(15)


// var parent = {
//     name: 'parent',
//     age: 49,
//     country: 'India'
// }

// var child = Object.create(parent)
// child.name = "Child"
// child.age = 34


// console.log(child, parent)


// 3rd method
function Person(name, energy) {
    // var person = Object.create(Person.prototype)
    this.name = name
    this.energy = energy
    // return person
}

Person.prototype.eat = function (amount) {
    console.log(this.name, "is eating")
    this.energy += amount
},

Person.prototype.sleep = function (time) {
    console.log(this.name, "is sleeping")
    this.ernery += time
},

Person.prototype.code = function (time) {
    console.log(this.name, "is coding")
    this.ernery -= time
}

// we can use new keyword with constructor to get rid of
// create a object
var sud = new Person("Sudhir", 20)
var ash = new Person("Ashish", 15)
console.log(sud, ash)
sud.code(10)
ash.sleep(15)


// prototype chain
const Car = function () {};

Car.prototype = {
    print () {
        return 'I am car'
    }
};

const ToyCar = function () {}
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function () {
    return 'I am a toyCar'
}

const ToyTransformer = function () {}
ToyTransformer.prototype = Object.create(ToyCar.prototype);
ToyTransformer.prototype.print = function () {
    return 'I am a toyTransformer'
}

const toyota = new Car()
const legoCar = new ToyCar()
const optimusPrime = new ToyTransformer()

console.log(toyota.print())
console.log(legoCar.print())
console.log(optimusPrime.print())