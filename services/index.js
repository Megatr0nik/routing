const { users } = require("../userdb/users");

const checkUser = (data) => {
    const { login, pass, reg } = JSON.parse(data);
    // console.log(data.login)

    if (users.hasOwnProperty(login)) {
        if (users[login].pass === pass) {
            return [1, users[login]];
        } else {
            return [0, 'Denaied'];
        }
    } else {
        return [0, 'No user'];
    }


}

exports.checkUser = checkUser;