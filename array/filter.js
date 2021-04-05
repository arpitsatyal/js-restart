let scores = [10,20,15,25,40,5]


let filtered = scores.filter(score => score > 20)
//doesnt alter the og array

let users =  [{
    name: 'shawn', premium: false
}, {
    name: 'yoshi', premium: false
}, {
    name: 'mario', premium: true
}, {
    name: 'fucker', premium: true
}]

premiumUsers = users.filter(user => {
    if(user.premium === true) return user
})
console.log(premiumUsers)