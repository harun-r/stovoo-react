import React from 'react';
import Close from '../assets/images/close.png'
import CloseIcon from '../assets/images/close-icon.png'
import ArrowIcon from '../assets/images/arrow-right.png'
import Video from "../assets/video/signup.mp4"
import {Link} from "react-router-dom";
const Signup = () => {
    return (
        <div className="create-account">
            <button className="close">
                <Link to="/">
                    <img src={Close} alt="close" />
                </Link>
            </button>
            <div className="content form-box">
                <div className="head">
                    <h3>
                        Create Account
                    </h3>
                    <p>Please enter your email address to get a verification code</p>
                </div>
                <div className="form-main">
                    <div className="form-input">
                        <label>Email</label>
                        <span className="icon"><img src={CloseIcon} alt="close-icon" /></span>
                        <input placeholder="Richoco@gmail.com"/>
                    </div>
                </div>
                <div className="form-footer">
                    <Link to="/email-verify">
                        <button
                            className="btn-submit">
                            <img src={ArrowIcon} alt="arrow-right" />
                        </button>
                    </Link>
                    <p>
                        Already have an account?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <div className="video-bg">
                <video autoPlay="true" loop
                >
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Signup;