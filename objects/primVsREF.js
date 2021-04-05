let scoreOne = 50
let scoreTwo = scoreOne

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`)

scoreOne = 100

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}`)
// doesnt change both

let userOne = {
    name: 'ram', age: 54
}
let userTwo = userOne

console.log(userTwo, userOne)

userOne.age = 3

console.log(userTwo, userOne) ///changes both