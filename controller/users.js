const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Request-Method': '*'
}

const { loginUser, regUser, giveFriendsUser } = require("../services/dataBase");
const { writeFile, readFileOnPath, createFolder } = require("../services/fs-worker");


const loginUserHandler = (req, res) => {

    // console.log(req)

    const obj = JSON.parse(req.body.person);
    res.set(HEADERS);
    loginUser(obj)
        .then(d => {

            res.send(d);
        })
        .catch(err => console.log(err));
}


const registerUserHandler = (req, res) => {

    const obj = JSON.parse(req.body.person);
    const avatar = req.file;

    regUser(obj)
        .then(d => {
            if (typeof d === 'string') {
                res.set(HEADERS);
                res.send(d);
            } else {
                console.log(d)
                createFolder(`./static/person/${d._id}/gallery`);
                writeFile(avatar, `/person/${d._id}/avatar`);
                res.set(HEADERS);
                res.send(d);
            }
        })
        .catch(err => console.log(err));
}


const postFriendsUserHandler = (req, res) => {
    const friends = req.body.friends;

    giveFriendsUser(friends)
        .then(d => {
            res.set(HEADERS);
            res.send(d);
        })
        .catch(err => console.log(err));
}

const getGalleryHandler = (req, res) => {
    console.log(req.url);
    const data = readFileOnPath(req.url);
    res.set(HEADERS);
    res.send(data);

}



module.exports = {
    loginUserHandler,
    registerUserHandler,
    postFriendsUserHandler,
    getGalleryHandler
}