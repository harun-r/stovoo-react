import React from 'react';
import arrowRight from "../assets/images/arrow-right.png"
import {Link} from "react-router-dom";
const NumberVerifyCode = () => {
    return (
        <div className="verify-number box-wrap">
            <div className="center-box">
                <div className="form-box">
                    <div className="head">
                        <h3>
                            Verify phone number
                        </h3>
                    </div>
                    <div className="form-main">
                        <div className="digit-boxes">
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box success"/>
                            <input value="4" className="digit-box error"/>
                        </div>
                        <div className="hint">
                            <p>Please enter a verification code sent to +1 (302) 451-9589</p>
                        </div>
                    </div>
                    <div className="form-footer">
                        <Link to="/registration">
                            <button className="btn-submit">
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

export default NumberVerifyCode;