import { createTheme, Grow, PopoverProps } from '@material-ui/core';

declare module '@material-ui/core/Icon' {
    interface IconPropsSizeOverrides {
        xsmall: true;
    }
}

const MuiPopoverDefaultProps: Omit<PopoverProps, 'open' | 'anchorEl'> = {
    TransitionComponent: Grow,
    TransitionProps: { timeout: { exit: 120, enter: 220 } },
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    transformOrigin: { vertical: 'top', horizontal: 'left' }
};

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
        MuiPopover: {
            defaultProps: MuiPopoverDefaultProps
        },
        MuiMenu: {
            defaultProps: {
                ...MuiPopoverDefaultProps,
                PaperProps: {
                    sx: { minWidth: '14rem' }
                }
            }
        }
    }
});
