import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import SteoTwo from './SteoTwo';
import StepOne from './StepOne';

const AutoPolicy = () => {
    return (
        <div>
            <switch>
                <Route exact path = "/" component = {StepOne} />
                <Route exact path = "/2" component = {SteoTwo} />
            </switch>
        </div>
    )
}
export default AutoPolicy 