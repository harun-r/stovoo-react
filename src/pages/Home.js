import React from 'react';
import Header from "../components/Header/Header";
import HomeHero from "../components/HomeHero/HomeHero";
import GridShowCase from "../components/GridShowCase/GridShowCase";
import img1 from "../assets/images/img-1.png"
import img2 from "../assets/images/img-2.png"
import img3 from "../assets/images/img-3.png"
import img4 from "../assets/images/img-4.png"
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <HomeHero/>
            {

            }
            <GridShowCase
                imgURL={img1}
                title="Binge watch and we get it delivered!"
                desc="Get the foods and groceries you love when and where you want them. It’s that simple. Just view and order your favorites in real-time. No photoshop!"
                secOrder="order-2"
                textColor="text-black"
                bgColor="bg-red"
            />
            <GridShowCase
                imgURL={img2}
                title="Enjoy quick-sales and Livestreams like never before!"
                desc="Watch the stories and live streams of your favorite vendors as they sell in an exciting and fun way, also see other people’s reactions when ordering delicacies."
                secOrder="order-1"
                textColor="text-white"
                bgColor="bg-yellow"
            />
            <GridShowCase
                imgURL={img3}
                title="Learn diverse dishes from seasoned vendors!"
                desc="Purchase courses from your favorite vendors or book video appointments with them & learn how different dishes are prepared from the comfort of your home; it’s like a culinary school in your hand."
                secOrder="order-2"
                textColor="text-black"
                bgColor="bg-blue"
            />
            <GridShowCase
                imgURL={img4}
                title="Monitor and track your orders on the go!"
                desc="Welcome to intelligent life. Keep track of your orders on the go from your apple watch & focus on what matters, track notifications, orders & see vendors near you all in one place."
                secOrder="order-1"
                textColor="text-white"
                bgColor="bg-black"
            />
        </div>
    );
};

export default Home;