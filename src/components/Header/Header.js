import React from 'react';
import Logo from "../../assets/images/logo.png";
import bar from "../../assets/images/bar.png";
import close2 from "../../assets/images/close-2.png";
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="bar">
                        <img src={bar} alt="logo"/>
                        <img src={close2} alt="logo"/>
                    </div>

                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className="menu-right">
                        <ul>
                            <li>
                                <a className="active" href="#">Our brief</a>
                            </li>
                            <li>
                                <a href="#" >Contact</a>
                            </li>
                            <li>
                                <a href="https://blog.stovoo.com/" >Updates</a>
                            </li>
                        </ul>
                        <div className="header-btn">
                            <button className="btn-login">Login</button>
                            <button className="btn-create-account">Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;