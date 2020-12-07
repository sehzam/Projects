const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isOnline: {
      type: Boolean,
      required: true,
      unique: false,
    },
    isStudent: {
      type: Boolean,
      required: true,
      unique: false,
    },
    isTrainer: {
      type: Boolean,
      required: true,
      unique: false,
    },
    isAd: {
      type: Boolean,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);
const log = mongoose.model("Log", logSchema);

module.exports = log;
