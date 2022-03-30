import React from 'react';
import Header from "../components/Header/Header";
import HomeHero from "../components/HomeHero/HomeHero";
import GridShowCase from "../components/GridShowCase/GridShowCase";
const Home = () => {

    return (
        <div className="home">
            <Header/>
            <HomeHero/>
            <GridShowCase
                imgURL="../../images/img-1.png"
                title="Binge watch and we get it delivered!"
                desc="Get the foods and groceries you love when and where you want them. It’s that simple. Just view and order your favorites in real-time. No photoshop!"
            />
        </div>
    );
};

export default Home;