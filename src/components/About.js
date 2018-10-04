import React, { Component } from 'react';
import MenuAppBar from "../Appbar";
import Fitforcebannersm from "./Fitforcebannersm.png";
import landingimg3 from "./landingimg3.jpeg";

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
            <MenuAppBar/>
            <div className="container">
                <img 
                    src={Fitforcebannersm}                                                
                    />
                <div className="landing-img">
                    <img 
                        src={landingimg3}
                        style={{width:'657px'}}                  
                    />
                    <h2 className="landing-header">Reaching your Fitness Goals....</h2>
                    <button className="landing-button">Free Consultation</button>
                    <h3 className="landing-text">starts with one click!</h3>
                    
                </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default About;