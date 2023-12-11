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

// hash user password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// userSchema.pre("insertMany", async function (next) {
//     console.log("insertMany was fired")

//     next();
// })
// validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    // return bcrypt.compare(password, this.password);
    return password === this.password
};

// when we query a user, we'll also get another field called `formCount` with the number of saved forms we have
// userSchema.virtual('formCount').get(function () {
//     return this.formEntries.length;
//   });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;