const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a name"],
        },
        email: {
            type: String,
            match: [/.+\@.+\..+/, "This email format is invalid"],
            unique: true,
            required: [true, "Please enter a email"],
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
        },
        role: { type: String, default: "user" },
        confirmed: { type: Boolean, default: false },
        tokens: [],
        postIds: [{ type: ObjectId, ref: "Post" }],
        wishList: [{ type: ObjectId, ref: 'Post' }]
    },
    { timestamps: true }
);

UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    delete user.role;
    delete user.email;
    return user;
    }

const User = mongoose.model("User", UserSchema);

module.exports = User;