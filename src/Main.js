import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Testimonials" component={Testimonials} />
        <Route exact path="/Contact" component={Contact} />
    </Switch>
);

function Hello(){
    return(
        <h1>
            Hello Test
        </h1>
    )
}

export default Main;

