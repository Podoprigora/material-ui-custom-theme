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
        },
        MuiIconButton: {
            defaultProps: {
                size: 'medium',
                disableRipple: true,
                focusRipple: false,
                focusVisibleClassName: 'MuiIconButton-focusVisible'
            }
        },
        MuiSvgIcon: {
            defaultProps: {
                fontSize: 'inherit'
            }
        },
        MuiIcon: {
            defaultProps: {
                fontSize: 'inherit'
            }
        }
    }
});
