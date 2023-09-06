import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import "./SignupLogin.css";

const SignupLogin = () => {
  const [typePassword, setTypePassword] = useState("password"); //password
  const [iconPassword, setIconPassword] = useState(eyeOff); //password

  const [typeConfirmPassword, setTypeConfirmPassword] = useState("password"); //confirm password
  const [iconConfirmPassword, setIconConfirmPassword] = useState(eyeOff); //confirm password

  const [typeAnswer, setTypeAnswer] = useState("password"); //Security Answer
  const [iconAnswer, setIconAnswer] = useState(eyeOff); //Security Answer

  const [typeLoginPassword, setTypeLoginPassword] = useState("password"); //Security Answer
  const [iconLoginPassword, setIconLoginPassword] = useState(eyeOff); //Security Answer

  const handleToggle = () => {
    if (typeLoginPassword === "password") {
      setIconLoginPassword(eye);
      setTypeLoginPassword("text");
    } else {
      setIconLoginPassword(eyeOff);
      setTypeLoginPassword("password");
    }
  };

  const handleTogglePassword = () => {
    if (typePassword === "password") {
      setIconPassword(eye);
      setTypePassword("text");
    } else {
      setIconPassword(eyeOff);
      setTypePassword("password");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (typeConfirmPassword === "password") {
      setIconConfirmPassword(eye);
      setTypeConfirmPassword("text");
    } else {
      setIconConfirmPassword(eyeOff);
      setTypeConfirmPassword("password");
    }
  };

  const handleToggleAnswer = () => {
    if (typeAnswer === "password") {
      setIconAnswer(eye);
      setTypeAnswer("text");
    } else {
      setIconAnswer(eyeOff);
      setTypeAnswer("password");
    }
  };
  return (
    <div className="body">
      <div className="container1">
        <div className="app-name">
          <h6 className="greetings">Welcome to</h6>
          <h1 className="convozone">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>V</span>
            <span>O</span>
            <span>Z</span>
            <span>O</span>
            <span>N</span>
            <span>E</span>
          </h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group mt-2">
                            <input
                              type="tel"
                              className="form-style"
                              placeholder="Phone Number"
                            />
                            <i className="input-icon uil uil-phone" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={typeLoginPassword}
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                            <span
                              className="flex justify-around items-center"
                              onClick={handleToggle}
                            >
                              <Icon
                                className="eyeIcon"
                                icon={iconLoginPassword}
                                size={20}
                              />
                            </span>
                          </div>
                          <button className="btn mt-4">Login</button>
                          <p className="mb-0 mt-4 text-center">
                            <a
                              href="https://www.web-leb.com/code"
                              className="link"
                            >
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Full Name"
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="tel"
                              className="form-style"
                              placeholder="Phone Number"
                            />
                            <i className="input-icon uil uil-phone" />
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type={typePassword}
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                            <span
                              className="flex justify-around items-center"
                              onClick={handleTogglePassword}
                            >
                              <Icon
                                className="absolute mr-10 eyeIcon"
                                icon={iconPassword}
                                size={20}
                              />
                            </span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={typeConfirmPassword}
                              className="form-style"
                              placeholder="Confirm Password"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                            <span
                              className="flex justify-around items-center"
                              onClick={handleToggleConfirmPassword}
                            >
                              <Icon
                                className="eyeIcon"
                                icon={iconConfirmPassword}
                                size={20}
                              />
                            </span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={typeAnswer}
                              className="form-style"
                              placeholder="Security Answer"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                            <span
                              className="flex justify-around items-center"
                              onClick={handleToggleAnswer}
                            >
                              <Icon
                                className="eyeIcon"
                                icon={iconAnswer}
                                size={20}
                              />
                            </span>
                          </div>

                          <div>
                            <button className="btn mt-4 otp-button">
                              Send OTP
                            </button>
                          </div>

                          <div className="form-group mt-3 otp-details">
                            <div>
                              <input
                                type="number"
                                className="form-style otp-box"
                                placeholder="OTP"
                              />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <div>
                              <button className="btn otp-verify-button">
                                Verify OTP
                              </button>
                            </div>
                          </div>

                          <button className="btn mt-4">REGISTER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
