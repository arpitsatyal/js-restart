function retirement(retireAge) {
    let a = 'years left until retirement...'
    return function(yrofBirth) {
        let age = 2021 - yrofBirth
        console.log(retireAge - age + a)
    }
}

retirement(66)(1990)

