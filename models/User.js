const { Schema, model, Types } = require('mongoose');

//Create User document to store in mongoDB
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
            match: [ /.+\@.+\..+/, 'Please enter a valid email address']
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

//Virtual for friend count 
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;