import React, {Component} from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from "prop-types";


// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import SweetAlert from "react-bootstrap-sweetalert";

// material-ui-icons
import Email from "material-ui-icons/Email";
import LockOutline from "material-ui-icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import LoginCard from "components/Cards/LoginCard.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Auth from "auth/Auth";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";


const auth = new Auth();


class LoginPage extends Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden",
            alert: null,
            show: false
        };

        this.hideAlert = this.hideAlert.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({cardAnimaton: ""});
            }.bind(this),
            700
        );
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        const formData = {
            email: this.email.value,
            password: this.password.value
        };


        if (!formData.email || !formData.password) {
            return self.setState({
                alert: (
                    <SweetAlert
                        style={{display: "block", marginTop: "-300px"}}
                        title="Username/Password is required"
                        warning
                        confirmBtnText="OK"
                        cancelBtnText="Cancel"
                        onConfirm={() => self.hideAlert()}
                        onCancel={() => this.hideAlert()}
                        confirmBtnCssClass={
                            self.props.classes.button + " " + self.props.classes.success
                        }
                    />
                )
            });
        }

        auth.auth0.login({
            realm: 'Username-Password-Authentication',
            username: formData.email,
            password: formData.password
        }, (err) => {
            if (err) {
                self.setState({
                    alert: (
                        <SweetAlert
                            style={{display: "block", marginTop: "-300px"}}
                            title={err.error_description || "Internal Error"}
                            warning
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            onConfirm={() => self.hideAlert()}
                            onCancel={() => this.hideAlert()}
                            confirmBtnCssClass={
                                self.props.classes.button + " " + self.props.classes.success
                            }
                        />
                    )
                });
            }

        });

        console.log('-->', formData);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                {this.state.alert}

                <div className={classes.container}>
                    <GridContainer justify="center">
                        <ItemGrid xs={12} sm={6} md={4}>
                            <form onSubmit={this.handleSubmit}>
                                <LoginCard
                                    customCardClass={classes[this.state.cardAnimaton]}
                                    headerColor="rose"
                                    cardTitle="Login"
                                    cardSubtitle=""
                                    footerAlign="center"
                                    footer={
                                        <Button color="roseNoBackground" type="submit" wd size="lg">
                                            Let's Go
                                        </Button>
                                    }
                                    socials={[
                                        // "fab fa-facebook-square",
                                        // "fab fa-twitter",
                                        // "fab fa-google-plus"
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
                                                inputRef={(input) => {
                                                    this.email = input
                                                }}
                                                success={this.state.registerEmailState === "success"}
                                                error={this.state.registerEmailState === "error"}
                                                labelText="Email..."
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "email",
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
                                                inputRef={(input) => {
                                                    this.password = input
                                                }}
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                inputProps={{
                                                    type: "password",
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
