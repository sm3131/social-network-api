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
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Please enter a valid email'
            }
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
        },
        id: false
    }
);

//Add virtual for friend count 
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;