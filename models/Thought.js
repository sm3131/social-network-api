const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const date = require('date-and-time')

//Model for thoughts
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to provide a body of text for your thought',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => date.format(createdAtVal, 'MM/DD/YYYY HH:mm')
        },
        username: {
            type: String,
            required: 'Please enter a username for this thought'
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
)

//Virtual for reaction count
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;




