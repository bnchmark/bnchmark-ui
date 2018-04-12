import React, {Component} from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from "prop-types";


// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";

// material-ui-icons
import Face from "material-ui-icons/Face";
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import LoginCard from "components/Cards/LoginCard.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

import Auth from "auth/Auth";

const auth = new Auth();

class LoginPage extends Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }

    componentDidMount() {
        auth.login();

        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({cardAnimaton: ""});
            }.bind(this),
            700
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content} style={{visibility: 'hidden'}}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <ItemGrid xs={12} sm={6} md={4}>
                            <form>
                                <LoginCard
                                    customCardClass={classes[this.state.cardAnimaton]}
                                    headerColor="rose"
                                    cardTitle="Login"
                                    cardSubtitle="Or Be Classical"
                                    footerAlign="center"
                                    footer={
                                        <Button color="roseNoBackground" wd size="lg">
                                            Let's Go
                                        </Button>
                                    }
                                    socials={[
                                        "fab fa-facebook-square",
                                        "fab fa-twitter",
                                        "fab fa-google-plus"
                                    ].map((prop, key) => {
                                        return (
                                            <Button
                                                color="simple"
                                                justIcon
                                                key={key}
                                                customClass={classes.customButtonClass}
                                            >
                                                <i className={prop}/>
                                            </Button>
                                        );
                                    })}
                                    content={
                                        <div>
                                            <CustomInput
                                                labelText="Email..."
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputAdornmentIcon}/>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="password"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LockOutline
                                                                className={classes.inputAdornmentIcon}
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </div>
                                    }
                                />
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});
//
// const Login = compose(
//     withStyles(loginPageStyle),
//     connect(mapStateToProps, mapDispatchToProps)
// )(LoginPage);

// export default withRouter(loginPageStyle)(Login);

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
// export default withStyles(loginPageStyle)(LoginPage);

export default compose(
    withStyles(loginPageStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);
