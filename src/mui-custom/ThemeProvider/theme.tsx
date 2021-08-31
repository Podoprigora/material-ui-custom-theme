import React from 'react';
import { ButtonBaseProps, ChipProps, createTheme, Grow, PopoverProps } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { MuiCustomPaperSimplebar, MuiCustomPaperSimplebarProps } from '@mui-custom';

import { ChevronDownSvg } from '../../assets/svg-icons/feather';

import { sassSpacingCallback, getSassBreakpoint, getSassVariable } from './sass-variables';

// Modules
declare module '@material-ui/core/styles' {
    interface BreakpointOverrides {
        xxl: true;
    }
}

declare module '@material-ui/core/Icon' {
    interface IconPropsSizeOverrides {
        xsmall: true;
    }
}

type ChipButtonBaseProps = ButtonBaseProps & ChipProps;

// Default props
const MuiPopoverDefaultProps: Omit<PopoverProps, 'open' | 'anchorEl'> = {
    TransitionComponent: Grow,
    TransitionProps: { timeout: { exit: 120, enter: 220, appear: 220 } },
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    transformOrigin: { vertical: 'top', horizontal: 'left' }
};

const MuiMenuPopoverDefaultProps: typeof MuiPopoverDefaultProps & {
    PaperProps?: MuiCustomPaperSimplebarProps;
} = {
    ...MuiPopoverDefaultProps,
    PaperProps: {
        component: MuiCustomPaperSimplebar,
        maxHeight: '32rem'
    }
};

// Theme
export const theme = createTheme({
    // Styles
    breakpoints: {
        values: {
            xs: getSassBreakpoint('xs'),
            sm: getSassBreakpoint('sm'),
            md: getSassBreakpoint('md'),
            lg: getSassBreakpoint('lg'),
            xl: getSassBreakpoint('xl'),
            xxl: getSassBreakpoint('xxl')
        },
        unit: getSassVariable('breakpoint-unit')
    },
    spacing: sassSpacingCallback,
    typography: {
        fontFamily: getSassVariable('font-family'),
        fontWeightRegular: getSassVariable('font-weight', 'number'),
        fontWeightLight: getSassVariable('font-weight-thin', 'number'),
        fontWeightMedium: getSassVariable('font-weight-strong', 'number'),
        body1: {
            fontSize: getSassVariable('font-size'),
            lineHeight: getSassVariable('line-height')
        }
    },
    palette: {
        primary: {
            main: getSassVariable('color-primary'),
            light: getSassVariable('color-primary-light'),
            dark: getSassVariable('color-primary-dark'),
            contrastText: getSassVariable('color-primary-text')
        },
        secondary: {
            main: getSassVariable('color-secondary'),
            light: getSassVariable('color-secondary-light'),
            dark: getSassVariable('color-secondary-dark'),
            contrastText: getSassVariable('color-secondary-text')
        },
        text: {
            primary: getSassVariable('body-color'),
            secondary: getSassVariable('color-text-note')
        }
    },

    // Components
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                focusRipple: false
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
        MuiChip: {
            defaultProps: {
                disableRipple: true,
                deleteIcon: <Clear />
            } as ChipButtonBaseProps
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
                ...MuiMenuPopoverDefaultProps,
                PaperProps: {
                    ...MuiMenuPopoverDefaultProps.PaperProps,
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
                    ...MuiMenuPopoverDefaultProps,
                    PaperProps: {
                        ...MuiMenuPopoverDefaultProps.PaperProps,
                        sx: { marginTop: '.2rem' }
                    }
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: 'primary',
                icon: <div className="MuiCustomCheckbox" />,
                checkedIcon: <div className="MuiCustomCheckbox MuiCustomCheckbox-checked" />
            }
        },
        MuiCircularProgress: {
            defaultProps: {
                size: '',
                color: 'primary',
                thickness: 3.4,
                disableShrink: false,
                variant: 'indeterminate'
            }
        }
    }
});
