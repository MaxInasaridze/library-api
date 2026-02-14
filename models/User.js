const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // no two users with same email
      lowercase: true, // store in lowercase
      trim: true,
    },
    isStudent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Compile model
const User = mongoose.model("User", userSchema);

module.exports = User;