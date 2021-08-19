import { createTheme, Grow, PopoverProps } from '@material-ui/core';
import { MuiCustomPaperSimplebar, MuiCustomPaperSimplebarProps } from '@mui-custom';
import React from 'react';
import { ChevronDownSvg } from '../../assets/svg-icons/feather';

// Modules
declare module '@material-ui/core/Icon' {
    interface IconPropsSizeOverrides {
        xsmall: true;
    }
}

// Default props
const MuiPopoverDefaultProps: Omit<PopoverProps, 'open' | 'anchorEl'> & {
    PaperProps?: MuiCustomPaperSimplebarProps;
} = {
    TransitionComponent: Grow,
    TransitionProps: { timeout: { exit: 120, enter: 220 } },
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    transformOrigin: { vertical: 'top', horizontal: 'left' },
    PaperProps: {
        component: MuiCustomPaperSimplebar,
        maxHeight: '32rem'
    }
};

// Theme
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
        MuiTooltip: {
            defaultProps: {
                enterDelay: 500
            }
        },
        MuiMenu: {
            defaultProps: {
                ...MuiPopoverDefaultProps,
                PaperProps: {
                    ...MuiPopoverDefaultProps.PaperProps,
                    sx: { minWidth: '14rem' }
                }
            }
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            }
        },
        MuiSelect: {
            defaultProps: {
                IconComponent: ChevronDownSvg as React.ElementType,
                MenuProps: {
                    ...MuiPopoverDefaultProps,
                    PaperProps: {
                        ...MuiPopoverDefaultProps.PaperProps,
                        sx: { marginTop: '.2rem' }
                    }
                }
            }
        }
    }
});
