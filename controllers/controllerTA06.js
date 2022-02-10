const fs = require('fs');

exports.getIndex = (req, res, next) => {
    res.render('pages/ta06', {
        title: "Team Activity 06",
        path: '/ta06'
    })
}

exports.getRegister = (req, res, next) => {
    res.render('pages/register', {
        title: "Create Account",
        path: '/ta06/register'
    })
}

exports.getLogin = (req, res, next) => {
    res.render('pages/login', {
        title: "Login",
        path: '/ta06/login'
    })
}

exports.postRegister = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const User = {
        email: email,
        password: password,
    };

    fs.writeFile('users.json', JSON.stringify(User), err => {
        if (err) {
            console.log(err);
            return res.redirect('/ta06');
        }
    })
    return res.redirect('/ta06/login');
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const User = {
        email: email,
        password: password,
    };

}