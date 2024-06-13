const express = require('express');

const { check } = require('express-validator');
const multer = require('multer');


const { regUser, logUser } = require('../controller/auth');
const { addPhoto, getGallery } = require('../controller/image-handler');

const opt = require('../midleware/opt');

const upload = multer();

const router = express.Router();

const checkData = [
    check('email', 'Wrong email...').isEmail(),
    check('password', 'Min length password a 6 sumbols...').isLength({ min: 6 })
];


router.post('/auth/register', opt, checkData, regUser);
router.post('/auth/login', opt, checkData, logUser);

router.post('/auth/refresh', opt, (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Refresh' });
});



router.get('/person/:userid/gallery', opt, getGallery);
router.post('/person/:userid/gallery', opt, upload.single('image'), addPhoto);


module.exports = router;