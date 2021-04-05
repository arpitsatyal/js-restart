let scores = [10, 20, 15, 25, 40, 5]

let firstHighScores = scores.find(score => score > 50) //find
console.log(scores.sort((a,b) => b- a)) //sort

///sort
// strings are sorted alpahbetically for strings

let users = [{
    name: 'shawn', score: 20
}, {
    name: 'yoshi', score: 30
}, {
    name: 'mario', score: 10
}, {
    name: 'fucker', score: 40
}] 

users.sort((a,b) => {
    if(a.score > b.score){
        return -1
    } else if(b.score > a.score) {
        return 1
    } else {
        return 0
    }
})

console.log(users)