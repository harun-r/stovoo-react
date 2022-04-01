import React from 'react';
import Slider from "react-slick";
// Import css files
import Pro1 from "../../assets/images/s1.png"
import Pro2 from "../../assets/images/s2.png"
import Pro3 from "../../assets/images/s3.png"
import Pro4 from "../../assets/images/s4.png"
import Pro5 from "../../assets/images/s5.png"
const Testimonials = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
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
                <Slider {...settings}>
                    <div className="item">
                        <div className="avatar">
                            <img src={Pro1} alt="avatar" />
                        </div>
                        <p>I believe stovoo is the global disruptor that will change the face of the food network & logistics sector, & I am glad to be a part of changing history by disrupting the space, glad to be part of this.</p>
                        <h3>Jesse Wallace </h3>
                        <span>CMO at StoVoo</span>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <img src={Pro2} alt="avatar" />
                        </div>
                        <p>I have been following the stovoo journey for a while & I am proud of what it has become; hopefully, it will change the game & impact the lives of its users globally, looking forward to greatness.</p>
                        <h3>Jeffery Hamenu </h3>
                        <span>Co-Founder at CodeLab Inc</span>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <img src={Pro3} alt="avatar" />
                        </div>
                        <p>I love the concept of vendors exchanging skills as a service & diverse chefs able to share cultural meal skills at a fee; knowing this, I believe  It would benefit so many lives globally.</p>
                        <h3>Francis Andorful</h3>
                        <span>Co-Founder TIS</span>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <img src={Pro4} alt="avatar" />
                        </div>
                        <p>I got intrigued by the idea of customers being able to pay for food & groceries via cryptocurrency, which is a fantastic option because there have been lots of topics on how to invest or save & less on spending it.</p>
                        <h3>Ebenezer Ghanney</h3>
                        <span>Director at Yellowcard</span>
                    </div>
                    <div className="item">
                        <div className="avatar">
                            <img src={Pro5} alt="avatar" />
                        </div>
                        <p>From the conception of the idea, I have always been that the food delivery app experience has become dull over the years; hence there is a need to disrupt it & add more value chain to the lives of vendors.</p>
                        <h3>Elinam Vorsk</h3>
                        <span>COO at StoVoo</span>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;