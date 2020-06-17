import React from 'react';
import './app.css';
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Resume from "./components/Resume";
import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Header/>
            <BannerSection/>
            <AboutSection/>
            <Resume/>
            <Services/>
        </div>
    );
}

export default App;
