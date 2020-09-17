import React from 'react';
import './app.css';
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={BannerSection}/>
                    <Route path='/about' component={AboutSection}/>
                    <Route path='/resume' component={Resume}/>
                    <Route path='/service' component={Services}/>
                    <Route path='/project' component={Project}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
