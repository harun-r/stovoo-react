import React from 'react';
import Pro1 from "../../assets/images/s1.png"
const Testimonials = () => {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="testimonial-header">
                    <h3>Testimonials</h3>
                    <p>
                        Our wall of love comprises what people have to say about stovoo; we
                        appreciate all feedback in improving our service & the lives of
                        others.
                    </p>
                </div>
            </div>
            <div className="testimonial-slide">
                <div className="item">
                    <div className="avatar">
                        <img src={Pro1} alt="avatar" />
                    </div>
                    <p>I believe stovoo is the global disruptor that will change the face of the food network & logistics sector, & I am glad to be a part of changing history by disrupting the space, glad to be part of this.</p>
                    <h3>Jesse Wallace </h3>
                    <span>CMO at StoVoo</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;