// const student = {
//     name: "john",
//     age: 21,
// }

// console.log(student.name)
// console.log(student.age)

//Destructuring
// const {name, age} = student
// console.log(name)
// console.log(age)

const student = {
    name: "john",
    age: 21,
    marks: {
        math: 60,
        science: 90
    }
}

const {marks} = student
console.log(marks)
const {marks: {math}} = student
console.log(math)
