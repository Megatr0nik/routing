const { User } = require('../models/userSchema');
const { Token } = require("../models/tokenSchema");



const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('config');

const { validationResult } = require('express-validator');
const { createFolder } = require('../services/fs-worker');


exports.regUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data in registration'
            });
        }

        const { email, password } = req.body;

        const present = await User.findOne({ email });

        if (present) {
            return res.status(400).json({
                message: 'User already registered...'
            });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const user = new User({ email: email, password: hashPassword });
        const tokenUser = new Token({ userId: user.id, token: "" });

        await user.save();
        await tokenUser.save();

        createFolder(`./static/person/${user.id}/gallery`);
        createFolder(`./static/person/${user.id}/avatar`);

        res.status(201).json({
            message: 'User registration done'
        });

    } catch (e) {
        res.status(500).json({
            message: 'Error, try again'
        });
    }
}


exports.logUser = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong password or email...'
            });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });



        if (!user) {
            return res.status(400).json({
                message: 'User not found...'
            });
        }

        const pwdCompare = await bcrypt.compare(password, user.password);

        if (!pwdCompare) {
            return res.status(400).json({
                message: 'Wrong password...'
            });
        }

        const accessToken = jwt.sign(
            { userId: user.id },
            config.get('secret'),
            { expiresIn: '5m' }
        );

        const refreshToken = jwt.sign(
            { userId: user.id },
            config.get('secret'),
            { expiresIn: '30d' }
        );

        console.log(user);
        const { id, name, avatar, friends, posts, date } = user;
        const userToken = await Token.findOne({ userId: user.id });
        await userToken.updateOne({ token: refreshToken })
        res.json({
            token: accessToken,
            userId: id,
            name,
            avatar,
            friends,
            posts,
            date
        });

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error, try again...'
        })
    }
}