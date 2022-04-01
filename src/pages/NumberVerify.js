import React from 'react';
import flag from "../assets/images/flag.png"
import closeIcon from "../assets/images/close-icon.png"
import arrowRight from "../assets/images/arrow-right.png"
import {Link} from "react-router-dom";
const NumberVerify = () => {
    return (
        <div className="enter-number box-wrap">
            <div className="center-box">
                <div className="form-box">
                    <div className="head">
                        <h3>
                            Your phone number
                        </h3>
                        <p>Please enter your phone number to get a verification code</p>
                    </div>
                    <div className="form-main">
                        <div className="form-input">
                            <div className="has-dropdown">
                                <div className="dropdown">
                                    <img src={flag} alt="flag.png" />
                                </div>
                                <div className="field">
                                    <label>Phone number</label>
                                    <span className="icon"><img src={closeIcon} alt="icon" /></span>
                                    <input type="text" placeholder="(000)  000  00 00" />
                                </div>
                                <div className="country-dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={flag} alt="flag.png" />
                                                <span>Country Name</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="form-footer">
                    <button className="btn-submit">
                        <img src={arrowRight} alt="arrow-right" />
                    </button>
                    <p>
                        Already have an account?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NumberVerify;