const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'You must provide a username',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Please provide a valid email',
            unique: true,
            //Add validation
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//Add virtual for friend count 

const User = model('User', UserSchema);

module.exports = User;