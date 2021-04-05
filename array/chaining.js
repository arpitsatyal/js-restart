let products = [{
    name: 'shawn', price: 30
}, {
    name: 'yoshi', price: 10
}, {
    name: 'mario', price: 50
}, {
    name: 'fucker', price: 40
}, {
    name: 'ankit', price: 5
}] 

// filter those that have price isnt over 20
// take that array and map it to new array with a sale price

let filteredProducts = products
.filter(product => product.price > 20)
.map(product => `the name is ${product.name}and price is ${product.price} / 2`)

console.log(filteredProducts)