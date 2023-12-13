const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
const formSchema= require("../models/Form");

// Schema to create User model
const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    // Connect User's Form Submissions to their account
    day1Entry: [formSchema],
    day2Entry: [formSchema],
    day3Entry: [formSchema]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

// validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return password === this.password
};

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;