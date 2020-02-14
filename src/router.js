import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './view/Home/Home';
import ChartComments from './view/ChartComments/ChartComments';
import GenderChart from './view/GenderChart/GenderChart';

const Router = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/comments" component={ChartComments} />
        <Route path="/gender" component={GenderChart} />
        <Route path="*">
            <Redirect to="/" /> 
        </Route>
    </Switch>
);

export default Router;