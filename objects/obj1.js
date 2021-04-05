var user = {
    name: 'arpit',
    age: 23,
    email: 'arpit@yahoo',
    location: 'ktm',
    blogs: ['king', 'crimson']
  };

  console.log(user.name)
  console.log(user['name']) 

  let key = 'location'
  console.log('using brakcet ntn',user[key])

  console.log(typeof(user))