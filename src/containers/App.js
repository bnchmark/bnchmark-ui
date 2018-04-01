/* eslint-disable no-undef */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div>asd</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
});

export default withRouter(connect(mapStateToProps, {
})(App))