const { Schema, model } = require('mongoose');

// Schema to create Admin model
const adminSchema = new Schema({
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
    // Connect all Users and Form Submissions to their account
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

// hash admin password
adminSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// validate password for logging in
adminSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

adminSchema
    .virtual('userCount')
    // Getter
    .get(function () {
        return this.users.length;
    });

// Initialize our User model
const Admin = model('Admin', adminSchema);

module.exports = Admin;