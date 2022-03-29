import React from 'react';
import Header from "../components/Header/Header";
import HomeHero from "../components/HomeHero/HomeHero";
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <HomeHero/>
        </div>
    );
};

export default Home;