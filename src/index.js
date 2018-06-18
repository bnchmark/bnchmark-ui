import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Auth from "auth/Auth";
import indexRoutes from "routes/index.jsx";
import "assets/scss/material-dashboard-pro-react.css?v=1.1.0";

import history from 'history.js';
const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

ReactDOM.render(
    <Router history={history}>
        <Switch>
            {indexRoutes.map((prop, key) => {

                if (prop.path === '/callback') {
                    return <Route path={prop.path} render={(props) => {
                        handleAuthentication(props);
                        return React.createElement(prop.component, props)
                    }} key={key}/>;
                }

                // if (!prop.private) {
                //     return <Route path={prop.path} component={prop.component} auth={auth} key={key}/>;
                // }

                return <Route path={prop.path} auth={auth} render={(props) => {
                    props.auth = auth;
                    return auth.isAuthenticated()
                        ? React.createElement(prop.component, props)
                        : <Redirect to='/login'/>
                }} key={key}/>
            })}
        </Switch>
    </Router>,
    document.getElementById("root")
);
