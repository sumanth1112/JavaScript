// const products = ["product1", "product2", "product3", "product4", "product5"]

const products = [
  { _id: 1, name: "Samsung", price: 10000, description: "mobile" },
  { _id: 2, name: "Apple", price: 15000, description: "smartphone" },
  { _id: 3, name: "Google", price: 8000, description: "tablet" }
]
let cart = []

products.map((product) => {
    const obj = {
        ...product,
        quantity: 1,
    }
    //cart.push(product)
    cart = [...cart, obj]
})
console.log(cart) 