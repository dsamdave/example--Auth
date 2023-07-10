const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }

},{
    toJSON: {
        transform(document, returnedObject) {
            returnedObject.id = returnedObject._id.toString(),
            delete returnedObject._id;
            delete returnedObject.__v;
            delete returnedObject.password;
            delete returnedObject.createdAt;
            delete returnedObject.updatedAt;

        }
    },
    timestamps:true
});

const User = new mongoose.model("User", userSchema)

module.exports = User