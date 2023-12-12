
exports.checkUser = (loginData, userPresent) => {

    if (userPresent.email === loginData.email) {
        if (userPresent.pass === loginData.pass) {
            return userPresent;
        } else {
            console.log('Wrong password or email...')
            return 'Wrong password or email...';
        }
    } else {
        return 'No user. Wrong password or email. Хз короче...';
    }
}