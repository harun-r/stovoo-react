import React from 'react';
import appIcon from "../assets/images/app.png"
import googlePLay from "../assets/images/google-play.png"
import LogoWhite from "../assets/images/logo-white.png"
import {Link} from "react-router-dom";
const Success = () => {
    return (
        <div className="success-wrap">
            <div className="container flex-start">
                <div className="box">
                    <h3>Welcome back Richard!</h3>
                    <p>Thank you for choosing us. Now you can start
                        ordering, selling, or delivering on the Stovoo app. It’s foodful freedom at your fingertips.
                        login into your app to get started.</p>
                    <div className="download-btn">
                        <div className="app">
                            <button><img src={appIcon} alt="app" /></button>
                        </div>
                        <div className="play">
                            <button><img src={googlePLay} alt="google-play" /></button>
                        </div>
                    </div>
                    <Link to="/">Go back to home</Link>
                    <div className="logo">
                        <img src={LogoWhite} alt="white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;