import React from 'react';

const GridShowCase = (props) => {
    return (
        <div className="content-showcase-wrap">
            <div className="container">
                <div className="content-inner bg-yellow">
                    <div className="cover">
                        <img src={props.imgURL} alt="images" />
                    </div>
                    <div className="content" >
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridShowCase;