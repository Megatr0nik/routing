const express = require('express');

const { check } = require('express-validator');

// const Log = require('../log/log');
const regUser = require('../controller/register');
const { logUser } = require('../controller/login');
const opt = require('../midleware/opt');


const router = express.Router();

const checkData = [
    check('email', 'Wrong email...').isEmail(),
    check('password', 'Min length password a 6 sumbols...').isLength({ min: 6 })
];



router.post('/register', opt, checkData, regUser);
router.post('/login', opt, checkData, logUser);
router.get('*', opt, (req, res) => {
    console.log(req.user);
    res.json({
        token: req.user
    })
});





module.exports = router;