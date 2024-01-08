const jwt = require("jsonwebtoken");
const config = require('config');


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {

        const token = req.headers.authorization;
        console.log("check =>", token);
        const checkToken = jwt.verify(token, config.get("secret"));

        req.user = checkToken;
        console.log("check =>", token);
        next();
    } catch (error) {
        console.log(error)
        return next();
    }

}