import React from "react";
import Auth from "auth/Auth";
const auth = new Auth();

class Login extends React.Component {

    componentWillMount() {
        auth.login();
    }

    render() {
        return <div>sad</div>;
    }
}

export default Login
