import React, {useState} from 'react';
import Logo from "../../assets/images/logo.png";
import bar from "../../assets/images/bar.png";
import close2 from "../../assets/images/close-2.png";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="bar"  onClick={toggleClass} >
                        <img className={!isActive ? 'active logo-bar' : 'logo-bar'} src={bar} alt="logo"/>
                        <img className={isActive ? 'active logo-close' : 'logo-close'} src={close2} alt="logo"/>
                    </div>

                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className= {isActive ? 'menu-right active' : 'menu-right'} >
                        <ul>
                            <li>
                                <HashLink to="#our-brief" className="active">
                                    Our brief
                                </HashLink >
                            </li>
                            <li>
                                <HashLink to="#contact">
                                    Contact
                                </HashLink>
                            </li>
                            <li>
                                <Link to="https://blog.stovoo.com/">
                                    Updates
                                </Link>
                            </li>
                        </ul>
                        <div className="header-btn">
                            <Link to="/login">
                                <button className="btn-login">
                                    Login
                                </button>
                            </Link>
                            <Link to="/create-account">
                                <button className="btn-create-account">
                                    Create Account
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;