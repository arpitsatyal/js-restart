// closure =  inner function that has access to
// global scope, own scope, own arguments, 
// parent fn scope, parent fn arguments

let test = 'welcome'

function welcome (name) {
    let inner = 'to'

    function innerFn (location) {
        let msg = 'hi'
        let text = `${msg}, ${name}, ${test}, ${inner}, ${location}`
        return text
    }

    function sayHello() {
        return 'hey i am say hello!!!!'
    }
    function setName (newName) {
        inner = newName
    }

    return {
        first: innerFn, second: sayHello, setName: setName
    }
}

let result = welcome('arpit')
console.log('result 1', result.setName('hello'))
console.log('sentence', result.first('tinkune'))