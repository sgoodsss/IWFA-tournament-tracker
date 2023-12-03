const { Schema, model, Types } = require("mongoose");
// Require Moment.js to format dates and times
const moment = require('moment');

// Schema to create Form model
const formSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMMM Do YYYY, h:mm a'),
    },
    // Max is the max point value of each fish multiplied by 5 (daily limit)
    spottedSeaTrout: {
        type: Number,
        default: 0,
        max: 175,
        required: true
    },
    jackCrevalle: {
        type: Number,
        default: 0,
        max: 150,
        required: true
    },
    ladyfish: {
        type: Number,
        default: 0,
        max: 100,
        required: true
    },
    snook: {
        type: Number,
        default: 0,
        max: 750,
        required: true
    },
    redDrum: {
        type: Number,
        default: 0,
        max: 600,
        required: true
    },
    tarpon: {
        type: Number,
        default: 0,
        max: 1250,
        required: true
    },
    bonefish: {
        type: Number,
        default: 0,
        max: 1250,
        required: true
    },
    permit: {
        type: Number,
        default: 0,
        max: 1625,
        required: true
    },
    tripletail: {
        type: Number,
        default: 0,
        max: 625,
        required: true
    },
    slam: {
        type: Number,
        default: 0,
        max: 750,
        required: true
    },
    flatsSlam: {
        type: Number,
        default: 0,
        max: 2500,
        required: true
    },
    dailyTotal: {
        type: Number,
        default: 0,
        required: true
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }


);

// Initialize our Form model
const Form = model('Form', formSchema);

module.exports = Form;