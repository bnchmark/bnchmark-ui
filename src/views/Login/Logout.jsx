import React from "react";
import Auth from "auth/Auth";
const auth = new Auth();

class Login extends React.Component {

    componentWillMount() {
        auth.logout();
    }

    render() {
        return null
    }
}

export default Login
