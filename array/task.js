// The indexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
// Returns -1 if the item is not found.
// If the item is present more than once, the indexOf method returns the position of the first occurence.

var fruits = ['apple', 'mango','ram', 'kiwi', 'apple', 'mango', 'banana', 'kiwi', 'apple', 'mango', 'pineapple', 'banana', 'kiwi', 'apple', 'mango', 'banana'];

let uniqueArr = []

fruits.forEach(fruit => uniqueArr.indexOf(fruit) === -1 ? uniqueArr.push(fruit) : '')

// console.log(uniqueArr)

// --------------------------------------------------------------------------------------------
// task 1
// prepare a function to calculate time which will return minute and sec value
// function calculate(time) {
//     // logical part
//     return {
//         minute: '',
//         sec: ''
//     }
// }
// var res = calculate('33m2s');
// res === {
//         minute: 33,
//         sec: 2
//     }
// 
function calcTime(time) {
    let hr = time.split('h')
    let min = hr[1].split('m')
    let sec = min[1].split('s')
    return {
        hr: hr[0], min: min[0], sec: sec[0]
    }
}

console.log(calcTime('3h4m5s'))