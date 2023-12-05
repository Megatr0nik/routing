

const fs = require('fs');
// const img = require('../static/avatars/')

const _PATH_AVATAR = '/avatars/269312438.png';

const getAvatar = (data) => {
    console.log(data);
    fs.readFileSync('.' + data, (err, d) => {
        console.log(err)
        return d;
    });
}

exports.getAvatar = getAvatar;