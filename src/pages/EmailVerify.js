import React from 'react';
import arrowRight from "../assets/images/arrow-right.png"
import {Link} from "react-router-dom";
const EmailVerify = () => {
    return (
        <div className="verify-email box-wrap">
            <div className="center-box">
                <div className="form-box">
                    <div className="head">
                        <h3>
                            Verify email address
                        </h3>
                        <p>Please enter your email address to get a verification code</p>
                    </div>
                    <div className="form-main">
                        <div className="digit-boxes">
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box error"/>
                        </div>
                        <div className="hint">
                            <p>Please enter a verification code sent to Richoco@gmail.com</p>
                        </div>
                    </div>
                    <div className="form-footer">
                        <Link to="/number-verify">
                            <button  className="btn-submit">
                                <img src={arrowRight} alt="arrow-right" />
                            </button>
                        </Link>
                        <p>
                            Didn't get code?
                            <Link to="/">
                                Resend
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerify;