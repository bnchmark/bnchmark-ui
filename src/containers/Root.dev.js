import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-dashboard-pro-react.css";
import indexRoutes from "routes/index.jsx";
import {createBrowserHistory} from "history";

const hist = createBrowserHistory();

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </Router>,
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};
export default Root