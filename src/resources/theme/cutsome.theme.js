import {createMuiTheme} from 'material-ui/styles';

/**
 * Material UI Theme - override theme font and size
 * Note: Overrides for components should be done through scss and not globally here
 * @type {Theme}
 */
const theme = createMuiTheme({
    typography: {
        fontFamily: '"Open Sans",sans-serif',
        htmlFontSize: 13,
    },
});

export default theme;