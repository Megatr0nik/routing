// const { users } = require("../userdb/users");
// const { giveData } = require("./dataBase");

exports.checkUser = (loginData, userPresent) => {
    // console.log('CHECK', loginData.email, userPresent.email);

    if (userPresent.email === loginData.email) {
        if (userPresent.pass === loginData.pass) {
            return [false, userPresent];
        } else {
            console.log('Wrong password or email...')
            return [false, 'Wrong password or email...'];
        }
    } else {
        return [false, 'No user. Wrong password or email. Хз короче...'];
    }
}



// exports.giveFriends = (data) => {

//     return giveData(data);
// }