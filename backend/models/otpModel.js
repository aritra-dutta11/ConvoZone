import mongoose from "mongoose";

const otpModel = mongoose.Schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: String,
    },
    createdAt: {
      type: Date,
      expires: "5m",
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// const OTP = mongoose.model("OTP", otpModel);
// module.exports = OTP;
export default mongoose.model("OTP", otpModel);
