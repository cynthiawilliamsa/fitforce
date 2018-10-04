import React, { Component } from 'react';
import MenuAppBar from "../Appbar";
import Fitforcebannersm from "./Fitforcebannersm.png";
import landingimg3 from "./landingimg3.jpeg";

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <div className="main"> 
            <MenuAppBar/>            
            <div className="container">                
                <img alt="FitForceBanner" 
                    src={Fitforcebannersm}                                                
                    />
                <div className="landing-img">
                    <img alt="Girl on TRX"
                        src={landingimg3}
                        style={{width:'657px'}}                  
                    />
                    <h2 className="landing-header">Reaching your Fitness Goals....</h2>
                    <button className="landing-button">Free Consultation</button>
                    <h3 className="landing-text">starts with a click!</h3>
                    
                </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
