import React, {Fragment} from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
const AppRouters = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/create-account" element={<Signup />}/>
            </Routes>
        </Fragment>
    );
};

export default AppRouters;