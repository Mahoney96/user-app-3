import React from "react";
import {Switch, Route } from "react-router-dom";


import Products from './Components/Dev#10/Products;'
import Details from './Components/Dev#10/Details';

export default (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/details/id:" component={Details} />
    </Switch>
);


