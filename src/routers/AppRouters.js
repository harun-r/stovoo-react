import React, {Fragment} from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
const AppRouters = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Fragment>
    );
};

export default AppRouters;