
const express = require('express');
const multer = require('multer');

const { loginUserHandler, registerUserHandler } = require('../controller/users');

const enterRoute = express.Router();
const upload = multer();




enterRoute.post('/login', upload.none(), loginUserHandler);
enterRoute.post('/register', upload.single('avatar'), registerUserHandler);


module.exports = enterRoute;