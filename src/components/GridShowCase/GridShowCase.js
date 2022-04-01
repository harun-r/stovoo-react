import React from 'react';
import { AnimationOnScroll  as Animation} from 'react-animation-on-scroll';
const GridShowCase = (props) => {
    return (
        <div className="content-showcase-wrap" id="our-brief">
            <div className="container">
                <div className={`content-inner bg-yellow ${ props.bgColor }`}>
                    <div className={`cover ${props.secOrder}`}>
                        <Animation animateIn="animate__fadeIn">
                            <img src={props.imgURL} alt="images" />
                        </Animation>
                    </div>
                    <div className="content">
                        <Animation animateIn="animate__fadeInUp">
                            <h3 className={props.textColor}>{props.title}</h3>
                        </Animation>
                        <Animation animateIn="animate__fadeInUp">
                            <p className={props.textColor}>{props.desc}</p>
                        </Animation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridShowCase;