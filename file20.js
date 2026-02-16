const products = [
  { _id: 1, name: "Samsung", price: 10000, category: "Laptop" },
  { _id: 2, name: "Apple", price: 15000, category: "Desktop" },
  { _id: 3, name: "Google", price: 8000, category: "Laptop" },
  { _id: 4, name: "OnePlus", price: 9000, category: "Desktop" },
  { _id: 5, name: "Xiaomi", price: 7000, category: "Laptop" },
  { _id: 6, name: "Sony", price: 12000, category: "Desktop" }
]
let search = "Laptop"
// method 1
// const resultArray = products.map((product) => product)
// method 2
// const resultArray = products.map((product) => {
//     const obj = {
//         ...product,
//     }
//     return obj
// })
// method 3
// const resultArray = products.map((product) => {
//     return product
// })

const resultArray = products.filter((product) => product.category === search)
console.log(resultArray)