import React from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";
const FunFact = () => {
    return (
        <div className="fun-fact">
            <div className="container">
                <div className="fun-fact-inner">
                    <div className="item">
                        <h3>

                            <CountUp
                                start={0}
                                end={10}
                            >
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start}>
                                        <span ref={countUpRef} ></span>
                                    </ReactVisibilitySensor>

                                )}
                            </CountUp>
                            M+</h3>
                        <p>Expected downloads & installations</p>
                    </div>
                    <div className="item">
                        <h3>
                            <CountUp
                                start={0}
                                end={345}
                            >
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start}>
                                        <span ref={countUpRef} ></span>
                                    </ReactVisibilitySensor>

                                )}
                            </CountUp>
                            K+
                        </h3>
                        <p>Expected daily active transactions</p>
                    </div>
                    <div className="item">
                        <h3>

                            <CountUp
                                start={0}
                                end={34}
                            >
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start}>
                                        <span ref={countUpRef} ></span>
                                    </ReactVisibilitySensor>

                                )}
                            </CountUp>
                            K+</h3>
                        <p>Expected happy vendors worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFact;