// const HEADERS = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Request-Method': '*'
// }

// const { loginUser, regUser, giveFriendsUser } = require("../services/dataBase");
// const { writeFile, readFileOnPath } = require("../services/fs-worker");


// const loginUserHandler = (req, res) => {

//     // console.log(req)

//     const obj = JSON.parse(req.body.person);
//     res.set(HEADERS);
//     loginUser(obj)
//         .then(d => {

//             res.send(d);
//         })
//         .catch(err => console.log(err));
// }


// const registerUserHandler = (req, res) => {

//     const obj = JSON.parse(req.body.person);
//     const avatar = req.file;

//     regUser(obj)
//         .then(d => {
//             if (typeof d === 'string') {
//                 res.set(HEADERS);
//                 res.send(d);
//             } else {
//                 writeFile(avatar, `/person/${d._id}/avatar/`);
//                 res.set(HEADERS);
//                 res.send(d);
//             }
//         })
//         .catch(err => console.log(err));
// }


// const postFriendsUserHandler = (req, res) => {
//     const friends = req.body.friends;

//     giveFriendsUser(friends)
//         .then(d => {
//             res.set(HEADERS);
//             res.send(d);
//         })
//         .catch(err => console.log(err));
// }

// const getGalleryHandler = (req, res) => {
//     // console.log(req.url);
//     const data = readFileOnPath(req.url);
//     res.set(HEADERS);
//     res.send(data);

// }

// const postGalleryHandler = (req, res) => {

//     // console.log('FOTO', req.url);
//     const file = req.file;

//     writeFile(file, `/person${req.url}`);
//     res.set(HEADERS);
//     res.send(writeFile(file, `/person${req.url}`));
// }

// const postPost = (req, res) => {
//     const file = req.file
//     const data = JSON.parse(req.body.postData)

    // writeFile(file, `/person${req.url}`);
//     const id = req.url.slice(1, 25);
//     postData(data, id);
//     console.log('post ', req.body)
//     console.log(file)
//     res.set(HEADERS);
//     res.send();
// }

// module.exports = {
//     loginUserHandler,
//     registerUserHandler,
//     postFriendsUserHandler,
//     getGalleryHandler,
//     postGalleryHandler
// }
