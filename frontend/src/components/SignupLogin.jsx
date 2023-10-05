import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./SignupLogin.css";
import { useState } from "react";
import { Store } from "react-notifications-component";
import axios from "axios";

// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// import { getAuth, RecaptchaVerifier } from "firebase/auth";

const SignupLogin = () => {
  const [typePassword, setTypePassword] = useState("password"); //password
  const [iconPassword, setIconPassword] = useState(eyeOff); //password

  const [typeConfirmPassword, setTypeConfirmPassword] = useState("password"); //confirm password
  const [iconConfirmPassword, setIconConfirmPassword] = useState(eyeOff); //confirm password

  const [typeAnswer, setTypeAnswer] = useState("password"); //Security Answer
  const [iconAnswer, setIconAnswer] = useState(eyeOff); //Security Answer

  const [typeLoginPassword, setTypeLoginPassword] = useState("password"); //Security Answer
  const [iconLoginPassword, setIconLoginPassword] = useState(eyeOff); //Security Answer

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [otp, setOtp] = useState("");

  const [mailValidated, setMailValidated] = useState(false);

  const navigate = useNavigate();

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

  const handleEmailChange = (e) => {
    setRegisterEmail(e.target.value);
    setMailValidated(false);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (registerEmail && name && registerPassword && answer) {
      if (registerPassword === confirmPassword) {
        //SEND OTP

        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/otp/sendOtp`,
            {
              registerEmail,
              name,
            }
          );

          if (res && res?.data?.success) {
            Store.addNotification({
              title: `OTP HAS BEEN SENT to ${registerEmail}:)`,
              message: "Check both Inbox and the Spam Folder for OTP",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
              },
            });
          } else {
            Store.addNotification({
              title: "ACCOUNT ALREADY EXISTS",
              message: res?.data?.message,
              type: "danger",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
              },
            });
          }
        } catch (error) {
          Store.addNotification({
            title: error,
            message: `Something went Wrong!!!`,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
        }
      } else {
        //PASSWORDS DONT MATCH
        Store.addNotification({
          title: "PASSWORDS DON'T MATCH -_-",
          message: "Please Type the Correct Passwords",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      }
    } else {
      //INCOMPLETE DETAILS
      Store.addNotification({
        title: "INCOMPLETE DETAILS -_-",
        message: "Please Fill in All The Details",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
      if (otp.length === 6) {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/otp/verifyOTP`,
          { registerEmail, otp }
        );
        console.log(res);
        console.log(res?.data?.success);
        if (res && res?.data?.success) {
          setMailValidated(true);
          Store.addNotification({
            title: "OTP VERIFIED",
            message: "Your Email has been verified",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
        } else {
          Store.addNotification({
            title: "Wrong OTP",
            message: "Please Enter the Correct OTP",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
        }
      } else {
        //WRONG LENGTH OF OTP
        Store.addNotification({
          title: "INCORRECT LENGTH!!!",
          message: "Please Enter 6-digit OTP",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      if (mailValidated) {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/auth/register`,
          { name, registerEmail, registerPassword, answer }
        );
        console.log(res?.data.success);
        if (res && res?.data?.success) {
          Store.addNotification({
            title: "CONGRATULATIONS",
            message: `${res?.data?.message}`,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
          // navigate("/");
          window.location.reload(true);
        } else {
          Store.addNotification({
            title: "REGSITRATION NOT SUCCESSFUL",
            message: `${res?.data?.message}`,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
        }
      } else {
        setOtp("");
        Store.addNotification({
          title: "EMAIL NOT VALIDATED!!!",
          message: "Please Validate your Email",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
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
                          {/* -----------------------------LOGIN -------------------------------------------------
                    ------------------------------------------------------------------------------------------
                    -------------------------------------------------------------------------------------------*/}
                          <h4 className="mb-4 pb-3 heading">Log In</h4>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              value={loginEmail}
                              onChange={(e) => setLoginEmail(e.target.value)}
                              className="form-style"
                              placeholder="Email ID"
                            />
                            <i className="input-icon uil uil-envelope" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={typeLoginPassword}
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
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
                    {/* -----------------------------REGISTER -------------------------------------------------
                    ------------------------------------------------------------------------------------------
                    -------------------------------------------------------------------------------------------*/}
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3 heading">Sign Up</h4>

                          <div className="form-group">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="form-style"
                              placeholder="Full Name"
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              value={registerEmail}
                              onChange={handleEmailChange}
                              type="text"
                              className="form-style"
                              placeholder="Email ID"
                            />
                            <i className="input-icon uil uil-envelope" />
                          </div>

                          <div className="form-group mt-2">
                            <input
                              value={registerPassword}
                              onChange={(e) =>
                                setRegisterPassword(e.target.value)
                              }
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
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              className="form-style"
                              placeholder="Confirm Password"
                            />

                            <i className="input-icon uil uil-lock-alt" />
                            <span
                              className="flex justify-around items-center"
                              onClick={handleToggleConfirmPassword}
                            >
                              <Icon
                                className="abs0lute eyeIcon"
                                icon={iconConfirmPassword}
                                size={20}
                              />
                            </span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type={typeAnswer}
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              className="form-style"
                              placeholder="Security Answer"
                            />
                            <i className="input-icon uil uil-key-skeleton" />
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
                            <button
                              type="submit"
                              className="btn mt-4 otp-button"
                              onClick={handleSendOTP}
                            >
                              Send OTP
                            </button>
                          </div>

                          <div className="form-group mt-3 otp-details">
                            <div>
                              <input
                                type="number"
                                className="form-style otp-box"
                                placeholder="OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                              <i className="input-icon uil uil-mobile-android-alt" />
                            </div>
                            <div>
                              <button
                                className="btn otp-verify-button"
                                onClick={handleVerifyOTP}
                              >
                                Verify OTP
                              </button>
                            </div>
                          </div>

                          <button className="btn mt-4" onClick={handleRegister}>
                            REGISTER
                          </button>
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
