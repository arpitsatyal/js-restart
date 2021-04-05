let prices = [10, 20, 15, 25, 40, 5]

let salePrices = prices.map(price => price / 2)


let users = [{
    name: 'shawn', price: 20
}, {
    name: 'yoshi', price: 30
}, {
    name: 'mario', price: 10
}, {
    name: 'fucker', price: 40
}]

let newPrice = users.map(user => {
    if (user.price > 20) {
        return {
            name: user.name, price: user.price / 2
        }
    } else {
        return user
    }
})
console.log(newPrice)

//if we didnt return an object and instead just perfomed it there then it would also 
// change the og array