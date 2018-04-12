import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from 'history.js';
import indexRoutes from "routes/index.jsx";

// import Callback from "components/Callback/Callback";
import "assets/scss/material-dashboard-pro-react.css";
import Auth from "auth/Auth";

const auth = new Auth();
const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

console.log(auth);
const Root = ({store}) => (
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        if (prop.path === '/callback') {
                            return <Route path={prop.path} render={(props) => {
                                console.log(prop);
                                handleAuthentication(props);
                                return React.createElement(prop.component, props)
                            }} key={key} />;
                        }

                        if (!prop.private) {
                            return <Route path={prop.path} component={prop.component} key={key}/>;
                        }

                        return <Route path={prop.path} render={(props) => (
                            auth.isAuthenticated()
                                ? React.createElement(prop.component, props)
                                : <Redirect to='/pages/login-page'/>
                        )} key={key}/>
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