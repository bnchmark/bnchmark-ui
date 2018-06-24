import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import {Switch, Route, Redirect} from "react-router-dom";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";
import dashboardRoutes from "routes/dashboard";


import TimelinePage from "views/Pages/Timeline.jsx";
import WelcomeProfileView from "views/Welcome/Profile.jsx";



const switchRoutes = (
    <Switch>
        <Route path='/' component={WelcomeProfileView} />;
    </Switch>
);

let ps;
class Welcome extends React.Component {
    state = {
        mobileOpen: false,
        miniActive: false
    };

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            // eslint-disable-next-line
            ps = new PerfectScrollbar(this.refs.mainPanel, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    render() {
        const {classes, auth, ...rest} = this.props;
        const mainPanel =
            classes.mainPanel +
            " " +
            cx({
                [classes.mainPanelSidebarMini]: this.state.miniActive,
                [classes.mainPanelWithPerfectScrollbar]:
                navigator.platform.indexOf("Win") > -1
            });
        return (
            <div className={classes.wrapper}>
                <Header
                    // sidebarMinimize={this.sidebarMinimize.bind(this)}
                    miniActive={this.state.miniActive}
                    routes={dashboardRoutes}
                    handleDrawerToggle={this.handleDrawerToggle}
                    {...rest}
                />

                <div className={mainPanel} ref="mainPanel">
                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Welcome);
