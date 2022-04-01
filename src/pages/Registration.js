import React from 'react';
import CloseIcon from '../assets/images/close-icon.png'
import hidden from '../assets/images/hidden.png'
import {Link} from "react-router-dom";
const Registration = () => {
    return (
        <div className="complete-reg box-wrap">
            <div className="center-box">
                <div className="form-box">
                    <div className="head">
                        <h3>
                            Complete Registration
                        </h3>
                    </div>
                    <div className="form-main">
                        <div className="form-half">
                            <div className="form-input">
                                <label>First name</label>
                                <input type="text" placeholder="Richard" />
                            </div>
                            <div className="form-input">
                                <label>Last name</label>
                                <input type="text" placeholder="Benson" />
                            </div>
                        </div>
                        <div className="form-input">
                            <label>User name, brand or Company name</label>
                            <span className="icon"><img src={CloseIcon} alt="icon" /></span>
                            <input type="text" placeholder="@ Richoco" />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <span className="icon"><img src={hidden} alt="icon" /></span>
                            <input type="text" placeholder="************" />
                        </div>
                        <div className="form-input">
                            <label>Confirm password</label>
                            <span className="icon"><img src={hidden} alt="icon" /></span>
                            <input type="text" placeholder="************" />
                        </div>
                        <div className="checkbox-wrap">
                            <input id="checkbox" type="checkbox" />
                                <label for="checkbox">I have read and accept the Terms of use</label>
                        </div>
                    </div>
                    <div className="form-footer">
                        <Link to="/success">
                            <button className="account-submit">
                                Create Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;