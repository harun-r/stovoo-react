import React, {Fragment} from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Success from "../pages/Success";
import EmailVerify from "../pages/EmailVerify";
const AppRouters = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/create-account" element={<Signup />}/>
                <Route path="/success" element={<Success />}/>
                <Route path="/email-verify" element={<EmailVerify />}/>
            </Routes>
        </Fragment>
    );
};

export default AppRouters;