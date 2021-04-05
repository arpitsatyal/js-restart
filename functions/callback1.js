let people = ['a', 'b','c','d','e']

let logPersons = (person, index) => {
    console.log(`${index} - hello, ${person}`)
}

people.forEach(logPersons)