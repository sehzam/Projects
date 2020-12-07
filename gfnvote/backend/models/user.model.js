const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },

    role: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
    isReg: {
            type: Boolean,
            required: true,
            unique: false,
            trim: true,
        },

},
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);

module.exports = User;