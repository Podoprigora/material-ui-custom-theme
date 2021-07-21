import { createTheme, Fade } from '@material-ui/core';

declare module '@material-ui/core/Icon' {
    interface IconPropsSizeOverrides {
        xsmall: true;
    }
}

export const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                focusRipple: true
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                focusVisibleClassName: 'MuiButton-focusVisible'
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: 'medium',
                focusRipple: false,
                focusVisibleClassName: 'MuiIconButton-focusVisible'
            }
        },
        MuiToggleButton: {
            defaultProps: {
                size: 'medium',
                disableFocusRipple: false
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
        },
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                disableFocusRipple: true,
                color: 'inherit',
                variant: 'outlined'
            }
        },
        MuiListItemText: {
            defaultProps: {
                disableTypography: true
            }
        },
        MuiBadge: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiMenu: {
            defaultProps: {
                TransitionComponent: Fade,
                PaperProps: {
                    elevation: 4,
                    sx: { width: '100%', maxWidth: '14rem', marginTop: '.2rem' }
                }
            }
        }
    }
});
