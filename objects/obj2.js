var user = {
    name: 'arpit',
    age: 23,
    email: 'arpit@yahoo',
    location: 'ktm',
    blogs: [
        { title: 'king', likes: 20 },
        { title: 'crimson', likes: 10 }
    ],
    login: function () {
        console.log('user logged in...')
    },
    logout: function () {
        console.log('user logout in...')
    },
    logBlogs: function () {
        console.log('this user has written following blogs...')
        this.blogs.forEach(blog => console.log(blog.title, blog.likes))
    }
};

user.login()
user.logout()
user.logBlogs()