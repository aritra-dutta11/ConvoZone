import dotenv from "dotenv";
import userModel from "../models/userModel.js";
import { hashedPassword } from "../helpers/authHelper.js";

dotenv.config();

//REGISTER CONTROLLER
export const registerController = async (req, res) => {
  try {
    const { name, registerEmail, registerPassword, answer } = req.body;

    const existingUser = await userModel.findOne({ email: registerEmail });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Email Already Registered.",
      });
    }

    //REGISTER
    const hashPassword = await hashedPassword(registerPassword);
    const user = await new userModel({
      name: name,
      email: registerEmail,
      password: hashPassword,
      answer: answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "Registration Successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
