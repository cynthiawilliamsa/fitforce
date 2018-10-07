import React, { Component } from 'react';
import Fitforcebannersm from "./Fitforcebannersm.png";
import landingimg3 from "./landingimg3.jpeg";
      
      class About extends Component {
        render() {
          return (
            <div className="App">
              <div className="main"> 
                  <div className="container">                
                      <img alt="FitForceBanner" 
                          src={Fitforcebannersm}                                                
                          />
                      <div className="about-content">
                      <h3>About the Trainer</h3>
                      <p>Cynthia Williams, Owner and Certified Personal Trainer, is a life-long fitness enthusiast. Throughout childhood, she was competitive in gymnastics and was an avid water-skier spending much of the summer months on the lake where she grew up. Throughout adulthood, Cynthia has made fitness a priority as she understands the importance it plays in overall health. 

Cynthia holds a Personal Training Certification through American Council on Exercise (ACE), a Hardstyle Kettlebell Certification (HKC) through Dragon Door and a Sports Nutrition Specialist Certificate. She keeps current on best practices in the fitness industry in order to provide the best value and results to her clients.
</p>

                      <h3>Training Approach</h3>
                      <p>Cynthia believes in a comprehensive and customized approach to fitness for her clients.  Her primary focuses are:
                         <ul>
                           <li>Assessing and addressing imbalance and areas of muscular strength and weakness</li>
                           <li>Improving mobility and flexibility</li>
                           <li>Designing a progressive workout program based on the clients goals</li>
                          </ul>                        
                        </p>                  
                          
                      </div>                  
                  </div>
              </div>
            </div>
          );
        }
      }
      export default About;
