function goToConcert(ok, cb) {
	console.log('i wanna go concert')
	console.log('iwant monwt')
	setTimeout(() => cb(null, 500))
}

goToConcert('xyz', function(err, done) {
	if(err) console.log('err')
		else {
			console.log('sucess')
		}
})

console.log('mujsic')