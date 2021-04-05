//function exprssion
let speak = function (name, time) {
    console.log(`good ${time}, ${name}`)
};

greet()
speak('arpit', 'morning')

// function declaration
function greet () {
    console.log('hi')
}

// hoisting happens for fun declaration but not fun exprssions