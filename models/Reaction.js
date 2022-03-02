const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            require: 'Please include a body of text for your reaction',
            max: 280
        },
        username: {
            type: String,
            require: 'Please provide a username for this reaction'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //add getter to format date
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = ReactionSchema;