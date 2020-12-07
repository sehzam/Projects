const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    courseId: {
        type: String,
        required: true,
        trim: true,
    },
    trainer: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    good: {
        type: String,
        required: false,
        trim: true,
    },
    bad: {
        type: String,
        required: false,
        trim: true,
    },
    q1: {
        type: String,
        required: true,
        trim: true,
    },
    q2: {
        type: String,
        required: true,
        trim: true,
    },
    q3: {
        type: String,
        required: true,
        trim: true,
    },
    q4: {
        type: String,
        required: true,
        trim: true,
    },
    q5: {
        type: String,
        required: true,
        trim: true,
    },
    q6: {
        type: String,
        required: true,
        trim: true,
    },
    q7: {
        type: String,
        required: true,
        trim: true,
    },
    q8: {
        type: String,
        required: true,
        trim: true,
    },
    q9: {
        type: String,
        required: true,
        trim: true,
    },
    q10: {
        type: String,
        required: true,
        trim: true,
    },
    q11: {
        type: String,
        required: true,
        trim: true,
    },
    
    },
    {
        timestamps: true,
    }
);
const Form = mongoose.model('Form', formSchema);

module.exports = Form;