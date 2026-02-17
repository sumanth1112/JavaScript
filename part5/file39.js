//Hoisting
// console.log(name)
// var name = "john"

// var name
// console.log(name)
// name = "John"

// Hoisting with let and const
// console.log(name)
// let name = "john"

// const name
// console.log(name)
// name = "John"

//functions are fully hoisted

// greet()
// function greet() {
//     console.log("Hello World")
// }

const greet = () => {
    console.log("Hello World")
}
greet()