const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, min: 6 },
    name: {
        first: { type: String, default: '' },
        last: { type: String, default: '' }
    },
    date: { type: Date, default: Date.now() },
    avatar: { type: String, default: 'default.jpg' },
    posts: {
        id: { type: String, default: '' },
        data: { type: String, default: '' },
        date: { type: Date, default: Date.now() }
    },
    friends: [{ type: String, default: '' }]
});



exports.User = model('Users', userSchema);
