//sync code 
// code is run one line after the other
// js is single threaded, only one code is executed at a time

// if there is blocking code then we will have a problem in sync codes

// async code-----start something now and finish it later/
// async code is non blocking

console.log(1)
console.log(2)
setTimeout(() => console.log('cb'), 3000)
console.log(4)
console.log(5)
