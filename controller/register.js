

const { User } = require('../models/userSchema');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const regUser = async (req, res) => {
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
            })
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const user = new User({ email: email, password: hashPassword });

        await user.save();

        res.status(201).json({
            message: 'User registration done'
        })

    } catch (e) {
        res.status(500).json({ message: 'Error, try again' })
    }

}



module.exports = regUser;