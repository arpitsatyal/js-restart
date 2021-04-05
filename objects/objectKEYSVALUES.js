var obj = {
    name: 'ram',
    address: 'tinkune',
    phone: 43444,
    email: '',
    ram:'hi'
};

console.log(obj.hasOwnProperty('ram'))
console.log('keys', Object.keys(obj))
console.log('values', Object.values(obj))

let asString = JSON.stringify(obj)
console.log(asString)