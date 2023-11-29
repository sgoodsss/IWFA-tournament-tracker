const { Schema, model } = require('mongoose');

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
    formEntries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Form'
        }
    ],
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema
    .virtual('formCount')
    // Getter
    .get(function () {
        return this.formEntries.length;
    });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;