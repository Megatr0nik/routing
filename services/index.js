const { users } = require("../userdb/users");

const checkUser = (data) => {
    // console.log(data)
    const { login, pass, reg } = JSON.parse(data);

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


const giveFriends = (data) => {

    console.log('friends', JSON.parse(data));

    const arr = JSON.parse(data).map(e => {
        return users[e]
    })

    return arr;
}

exports.giveFriends = giveFriends;