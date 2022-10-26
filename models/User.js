const { Schema, model } = require('mongoose');

function validateEmail(email) {
    // regex to match email addresses
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

// set up User schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// create virtual "friendCount" that gets the length of the user's friends field on query
userSchema.virtual("friendCount")
    .get(function () {
        return this.friends.length;
    });

// initialize our user model
const User = model("user", userSchema);

module.exports = User;