const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const { User } = require("../models/userSchema");
const jwt = require("jsonwebtoken");


const config = require('config');





exports.logUser = async (req, res) => {

    console.log(req.url)

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

        const token = jwt.sign(
            { userId: user.id },
            config.get('secret'),
            { expiresIn: '30m' }
        );

        console.log(user);
        const { id, name, avatar, friends, posts, date } = user;
        res.json({
            token,
            userId: id,
            name,
            avatar,
            friends,
            posts,
            date

        })

    } catch (e) {
        res.status(500).json({
            message: 'Error, try again...'
        })
    }
}