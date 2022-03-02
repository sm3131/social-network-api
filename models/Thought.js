const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
//Add date formatter utils file function

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to provide a body of text for your thought',
            //add length 1-280
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
    }
)

//Create a virtual for reaction count

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;