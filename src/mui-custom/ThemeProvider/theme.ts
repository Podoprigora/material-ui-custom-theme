import { createTheme } from '@material-ui/core';

export const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                disableFocusRipple: true,
                focusRipple: false,
                focusVisibleClassName: 'MuiButton-focusVisible'
            }
        }
    }
});
