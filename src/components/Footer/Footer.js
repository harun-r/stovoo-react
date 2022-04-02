import React from 'react';
import { AnimationOnScroll  as Animation} from 'react-animation-on-scroll';
import googlePlay from "../../assets/images/google-play.png"
import appLogo from "../../assets/images/app.png"
import LogoFooter from "../../assets/images/logo-white.png"
import Linkedin from "../../assets/images/linkedin.png"
import twitter from "../../assets/images/twitter.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer" id="contact" >

                <div className="footer-top">
                    <Animation animateIn="animate__fadeInUp">
                        <h3>Download and try it now</h3>
                        <p>Welcome to the stovoo family; we are constantly evolving & looking for more fun and exciting ways to
                            make your food ordering experience the best you can have; I would love to see how you use stovoo
                            today.</p>
                    </Animation>
                <div className="footer-btn">
                    <Link to="/">
                        <img src={googlePlay} alt="app"/>
                    </Link>
                    <Link to="/">
                        <img src={appLogo} alt="app"/>
                    </Link>
                </div>
            </div>

                <div className="footer-center">
                <div>
                        <img className="logo-f" src={LogoFooter} alt="logo-white" />
                        <p> Limestone Road STE 200-C in Wilmington, DE 19808 hello@stovoo.com +1 (302) 451-9589</p>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/company/stovoo-inc/">
                                    <img src={Linkedin} alt="app" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/StoVoo_Hq">
                                    <img src={twitter} alt="app"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/stovoo">
                                    <img src={facebook} alt="app" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/stovoo_hq/">
                                    <img src={instagram} alt="app" />
                                </a>
                            </li>
                        </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-inner">
                        <p>© Copyright StoVoo Inc</p>
                        <div className="right">
                            <Link to="/">Privacy</Link>
                            <Link to="/">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;