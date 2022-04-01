import React, {useState} from 'react';
import Modal from 'react-modal';
import videoBG from "../../assets/images/video-bg.png"
import PlayButton from "../../assets/images/play.png"
import AppIcon from "../../assets/images/app.png"
import GooglePlayIcon from "../../assets/images/google-play.png"
import videoIcon from "../../assets/images/icons/video.png"
import HeartIcon from "../../assets/images/icons/heart.png"
import HandIcon from "../../assets/images/icons/hand.png"
import RosunIcon from "../../assets/images/icons/rosun.png"
import CloseIcon from "../../assets/images/close.png"
import VideoSrc from "../../assets/video/ss.mp4"
import ProgressImg from "../../assets/images/video-bg.png"
const HomeHero = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="home-hero">
            <div className="container">
                <div className="home-hero-inner">
                    <div className="video">
                        <img src={videoBG} alt="video" />
                        <button
                            onClick={openModal}
                            className="video-play">
                            <img src={PlayButton} alt="PlayButton" />
                        </button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                        >
                            <button onClick={closeModal} className="btn-close">
                                <img src={CloseIcon} alt="close" />
                            </button>
                            <div className="modal-wrap">
                                <div className="video-wrap">
                                    <video id="videoElement"
                                           controls="true"
                                    >
                                        <source src={VideoSrc} type="video/mp4" />
                                    </video>
                                </div>

                            </div>
                        </Modal>
                    </div>
                    <div className="info">
                        <div className="info-right">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full">
                                        <div className="fill"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill"></div>
                                    </div>
                                    <div className="inside-circle">
                                        <img src={ProgressImg} alt="ProgressImg"/>
                                    </div>
                                </div>
                            </div>
                            <ul>

                                <li data-aos="slide-up">
                                    <img src={videoIcon} alt="videoIcon"/>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={HeartIcon} alt="HeartIcon" />
                                    <span>56</span>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={HandIcon} alt="HandIcon" />
                                        <span>22</span>
                                </li>
                                <li data-aos="slide-up">
                                    <img src={RosunIcon} alt="RosunIcon" />
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