const { Schema, Types } = require("mongoose");
// Require Moment.js to format dates and times
const moment = require('moment');

// Schema to create Form model
const formSchema = new Schema({
    formId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
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
        required: true
    },
    jackCrevalle: {
        type: Number,
        default: 0,
        required: true
    },
    ladyfish: {
        type: Number,
        default: 0,
        required: true
    },
    snook: {
        type: Number,
        default: 0,
        required: true
    },
    redDrum: {
        type: Number,
        default: 0,
        required: true
    },
    tarpon: {
        type: Number,
        default: 0,
        required: true
    },
    bonefish: {
        type: Number,
        default: 0,
        required: true
    },
    permit: {
        type: Number,
        default: 0,
        required: true
    },
    tripletail: {
        type: Number,
        default: 0,
        required: true
    },
    slam: {
        type: Number,
        default: 0,
        required: true
    },
    flatsSlam: {
        type: Number,
        default: 0,
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


module.exports = formSchema;