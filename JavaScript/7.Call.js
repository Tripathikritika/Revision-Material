// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }

// console.log(new Food('cheese', 5).price);

const name = {
    firstName : "abc",
    lastName : "xyz",
    fullName : function() {
        console.log(this.firstName + this.lastName)
    }
}
const name2 = {
    firstName : "def",
    lastName : "zyx",
}

name.fullName.call(name2)

// name.fullName()