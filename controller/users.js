const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Request-Method': '*'
}

const { loginUser, regUser } = require("../services/dataBase");
const { writeFile } = require("../services/fs-worker");


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
                writeFile(avatar, `/person/${d._id}/avatar`);
                res.set(HEADERS);
                res.send(d);
            }
        })
        .catch(err => console.log(err));
}



module.exports = {
    loginUserHandler,
    registerUserHandler
}