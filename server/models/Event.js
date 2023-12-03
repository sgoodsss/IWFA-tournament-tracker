const { Schema, model } = require('mongoose');

// Schema to create Admin model
const eventSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
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

// Initialize our User model
const Event = model('Event', eventSchema);

module.exports = Event;