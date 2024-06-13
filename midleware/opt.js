const jwt = require("jsonwebtoken");
const config = require('config');


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }


    if (!req.headers.authorization) {
        return next();
    }

    try {

        const token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, config.get("secret"), (err, decoded) => {
            if (err) {
                console.log('error =>', err.message)
            }
            return decoded;
        });
        console.log('decoded', decoded)
        req.user = decoded;

        next();
    } catch (error) {

        // console.log(error)
        return next();
    }

}