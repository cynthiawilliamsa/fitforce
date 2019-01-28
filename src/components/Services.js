import React, { Component } from 'react';
import Fitforcebannersm from "./Fitforcebannersm.png";
import Card from './Card';       


class Services extends Component {
  render() {
    return (        
    
        <div className="App">
            <div className="main"> 
                <div className="container">                
                    <img alt="FitForceBanner" 
                        src={Fitforcebannersm}                                                
                        />                   
                    <Card
                       img="./personaltraining.jpeg"
                       title="Personal Training"
                       descriptionText="60 min one-on-one session"

                    
                    />
            
            </div>
        </div>
            
        </div>
        );
    }
}
    export default Services;     
