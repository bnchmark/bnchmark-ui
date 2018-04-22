import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from 'containers/Root';
import configureStore from 'store/configureStore';
import {MuiThemeProvider} from 'material-ui/styles';
import theme from 'resources/theme/cutsome.theme';

const store = configureStore();

console.log(process.env)

render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <Root store={store}/>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('root')
);