import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from "./components/Landing";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/test" component={Landing} />
    </Switch>
);
export default Main;

