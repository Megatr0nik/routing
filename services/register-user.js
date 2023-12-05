// const fs = require('fs');

// // const fs = require('../userdb/userdb.json');

// const _PATH = '../routing/userdb/userdb.txt';

// const regUser = (userData) => {
//     const userLogin = userData.login;

//     fs.appendFileSync(_PATH, `"${userLogin}":${JSON.stringify(userData)},`, (err) => {
//         console.log(err)
//     });

//     const dataF = JSON.parse(`{${fs.readFileSync(_PATH, 'utf8').slice(0, -1)}}`);

//     return dataF;

// }



// exports.regUser = regUser;