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
        tokens: [],
        postIds: [{ type: ObjectId, ref: "post" }],
        wishList: [{ type: ObjectId, ref: 'post' }]
    },
    { timestamps: true }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;