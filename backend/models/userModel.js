import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    answer: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model("User", userModel);

// module.exports = User;

export default mongoose.model("Users", userModel);
