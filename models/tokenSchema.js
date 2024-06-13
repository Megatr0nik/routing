const { Schema, model } = require("mongoose");


const tokenSchema = new Schema({
    userId: { type: String, unique: true },
    token: { type: String }
});


exports.Token = model('Token', tokenSchema);