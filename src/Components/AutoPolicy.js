import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Driverinfo from './Driverinfo';
import Insurancedetails from './Insurancedetails';
import Product from './Product';
import SteoTwo from './SteoTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import VehicleInfo from './VehicleInfo';

const AutoPolicy = () => {
    return (
        <div>
            <switch>
            <Route exact path = "/" component = {Product} />
                <Route exact path = "/1" component = {VehicleInfo} />
                <Route exact path = "/2" component = {SteoTwo} />
                <Route exact path = "/3" component = {StepThree} />
                <Route exact path = "/4" component = {Driverinfo} />
                <Route exact path = "/5" component = {Insurancedetails} />
            </switch>
        </div>
    )
}
export default AutoPolicy 