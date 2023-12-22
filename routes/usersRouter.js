
const express = require('express');
const multer = require('multer');

const {
    loginUserHandler,
    registerUserHandler,
    postFriendsUserHandler,
    getGalleryHandler,
    postGalleryHandler } = require('../controller/users');

const enterRoute = express.Router();
const upload = multer();


enterRoute.post('/login', upload.none(), loginUserHandler);
enterRoute.post('/register', upload.single('avatar'), registerUserHandler);
enterRoute.post('/friends', upload.none(), postFriendsUserHandler);
enterRoute.get('/:userid/gallery', getGalleryHandler);
enterRoute.post('/:userid/gallery', upload.single('foto'), postGalleryHandler)


module.exports = enterRoute;