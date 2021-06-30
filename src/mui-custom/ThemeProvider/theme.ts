import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    props: {
        MuiButton: {
            disableElevation: true,
            disableRipple: true,
            disableFocusRipple: true,
            focusRipple: false,
            focusVisibleClassName: 'MuiButton-focusVisible'
        }
    }
});
