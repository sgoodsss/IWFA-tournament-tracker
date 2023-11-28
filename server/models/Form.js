const { Schema, model, Types } = require("mongoose");
// Require Moment.js to format dates and times
const moment = require('moment');
 
// Reaction Schema to be used in thoughtSchema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMMM Do YYYY, h:mm a'),
    },
});

// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMMM Do YYYY, h:mm a'),
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Get total count of reactions
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;