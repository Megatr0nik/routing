
const express = require('express');
const multer = require('multer');

const {
    loginUserHandler,
    registerUserHandler,
    postFriendsUserHandler,
    getGalleryHandler } = require('../controller/users');

const enterRoute = express.Router();
const upload = multer();




enterRoute.post('/login', upload.none(), loginUserHandler);
enterRoute.post('/register', upload.single('avatar'), registerUserHandler);
enterRoute.post('/friends', upload.none(), postFriendsUserHandler);
enterRoute.get('/:userid/gallery', getGalleryHandler);


module.exports = enterRoute;