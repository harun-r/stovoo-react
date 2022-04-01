import React from 'react';

const GridShowCase = (props) => {
    return (
        <div className="content-showcase-wrap">
            <div className="container">
                <div className={`content-inner bg-yellow ${ props.bgColor }`}>
                    <div className={`cover ${props.secOrder}`}>
                        <img src={props.imgURL} alt="images" />
                    </div>
                    <div className="content">
                        <h3 className={props.textColor}>{props.title}</h3>
                        <p className={props.textColor}>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridShowCase;