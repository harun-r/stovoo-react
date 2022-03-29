import React from 'react';
import videoBG from "../../assets/images/video-bg.png"
import PlayButton from "../../assets/images/play.png"
import AppIcon from "../../assets/images/app.png"
import GooglePlayIcon from "../../assets/images/google-play.png"
import videoIcon from "../../assets/images/icons/video.png"
import HeartIcon from "../../assets/images/icons/heart.png"
import HandIcon from "../../assets/images/icons/hand.png"
import RosunIcon from "../../assets/images/icons/rosun.png"
const HomeHero = () => {
    return (
        <div className="home-hero">
            <div className="container">
                <div className="home-hero-inner">
                    <div className="video">
                        <img src={videoBG} alt="video" />
                        <button
                            className="video-play">
                            <img src={PlayButton} alt="PlayButton" />
                        </button>
                    </div>
                    <div className="info">
                        <div className="info-right">
                            <ul>
                                <li data-aos="slide-up">
                                    <img src={videoIcon} alt="video"/>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={HeartIcon} alt="video" />
                                    <span>56</span>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={HandIcon} alt="video" />
                                        <span>22</span>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={RosunIcon} alt="video" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Order great Foods and much more! </h3>
                        <p>Even better with recipes, groceries, and more,
                            get on Board  with a more Fun & exciting way to order food & today.</p>
                        <div className="download-btn">
                            <div className="app">
                                <button><img src={AppIcon} alt="app"/></button>
                            </div>
                            <div className="play">
                                <button><img src={GooglePlayIcon} alt="google-play"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;