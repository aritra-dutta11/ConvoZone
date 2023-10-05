import express from "express";
import {
  sendOTPController,
  verifyOTPController,
} from "../controller/otpController.js";

const router = express.Router();

//getOTP
router.post("/sendOtp", sendOTPController);

//Verify OTP
router.post("/verifyOTP", verifyOTPController);

export default router;
