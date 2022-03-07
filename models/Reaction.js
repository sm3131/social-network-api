const { Schema, Types } = require('mongoose');
const date = require('date-and-time');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Please include a body of text for your reaction',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Please provide a username for this reaction'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => date.format(createdAtVal, 'MM/DD/YYYY HH:mm')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = ReactionSchema;