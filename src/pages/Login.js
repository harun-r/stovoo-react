import React from 'react';
import CloseIcon from '../assets/images/close-icon.png'
import hidden from '../assets/images/hidden.png'
const Login = () => {
    return (
        <div  className="login box-wrap">
            <div className="center-box">
                <div className="form-box">
                    <div className="head">
                        <h3>
                            Login to StoVoo
                        </h3>
                    </div>
                    <div className="form-main">
                        <div className="form-input">
                            <label>Email Address</label>
                            <span className="icon"><img src={CloseIcon} alt="icon" /></span>
                            <input type="text" placeholder="desk@richoco.studio" />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <span className="icon"><img src={hidden} alt="icon" /></span>
                            <input type="text" placeholder="************" />
                        </div>
                        <div className="checkbox-wrap">
                            <input id="checkbox" type="checkbox"/>
                            <label for="checkbox">I have read and accept the Terms of use</label>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button className="account-submit">
                            Login Now
                        </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;