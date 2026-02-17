const products = [
  { _id: 1, name: "Samsung", price: 10000, category: "Laptop" },
  { _id: 2, name: "Apple", price: 15000, category: "Desktop" },
  { _id: 3, name: "Google", price: 8000, category: "Laptop" },
  { _id: 4, name: "OnePlus", price: 9000, category: "Desktop" },
  { _id: 5, name: "Xiaomi", price: 7000, category: "Laptop" },
  { _id: 6, name: "Sony", price: 12000, category: "Desktop" }
]

const cart =[]
function addToCart(id) {
  const product = products.find((product) => product._id === id)
  cart.push(product)
}
function decrement(id) {
  const product = products.find((product => product._id === id))
  cart.push(product)
}
addToCart(1)
addToCart(3)
addToCart(5)
console.log(cart)

increment(1)
increment(5)

