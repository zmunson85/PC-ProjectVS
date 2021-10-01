function sum(x, y) {
    try {
        if (x(isNaN) || y(isNaN));
    } catch (error) {
        console.log(error, ' One or more arguments is not a number')

    }
    console.log(x + y);
    return x + y
}
console.log(sum(21, 23));
console.log(sum('Num ', 3));



let userLogin =
{
    username: "Zach",
    password: "Password"
};

function newLogin(user, password) {
    try {
        if (userLogin.username !== user || userLogin.password !== password)
            throw Error('Please Check your User Info and Try again, Invalid Username or Password!')
    } catch (error) {
        return error
    }
    return ` ${userLogin.username}, Was Logged In Successfully`
}

console.log(newLogin('Zach', 'Password'));
console.log(newLogin('Bob', 'BeBop'));