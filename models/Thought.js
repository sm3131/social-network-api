const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
//Add date formatter utils file function

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to provide a body of text for your thought',
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //add getter for formatted date
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

//Create a virtual for reaction count
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;