import OTP from "../models/otpModel.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import generateOTP from "./generateOTP.js";
import userModel from "../models/userModel.js";
import otpModel from "../models/otpModel.js";

dotenv.config();

//TRANSPORTER FOR NODEMAILER
var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  from: process.env.SMTP_MAIL,
});

export const sendOTPController = async (req, res) => {
  const { registerEmail, name } = req.body;

  const existingUser = await userModel.findOne({ email: registerEmail });
  if (existingUser) {
    return res.status(200).send({
      success: false,
      message: "Already Registered",
    });
  }

  //OTP generated
  const OTP = generateOTP();

  const otp = await new otpModel({
    email: registerEmail,
    otp: OTP,
  }).save();

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: registerEmail,
    subject: "Convo-Zone",
    text: `Hello ${name}, your One-Time-Password for Convo-Zone is ${OTP} that will be valid only for 5 minutes.`,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent Successfully");
      res.status(201).send({
        success: true,
        message: "OTP SENT",
      });
    }
  });
};

//verify OTP
export const verifyOTPController = async (req, res) => {
  try {
    const { registerEmail, otp } = req.body;
    const users = await otpModel
      .find({ email: registerEmail })
      .sort({ createdAt: -1 });
    const user = users[0];
    console.log(user.otp);
    console.log(otp);
    if (user.otp === otp) {
      console.log(true);
      res.status(200).send({
        success: true,
        message: "Verified",
      });
    } else {
      console.log(false);
      res.status(201).send({
        success: false,
        message: "Wrong OTP",
      });
    }
  } catch (error) {}
};
