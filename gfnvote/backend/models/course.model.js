const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
        course: {
            type: String,
            required: true,
            trim: true,
        },
        trainer: {
            type: String,
            required: true,
            trim: true,
        },
        begin: {
            type: Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        },
        students: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true,
    }
);
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;