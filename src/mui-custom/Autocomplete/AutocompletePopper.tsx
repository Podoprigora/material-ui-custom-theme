import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Grow, Paper, Popper, PopperProps, useTheme } from '@material-ui/core';

export interface MuiCustomAutocompletePopperProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    autoWidth?: boolean;
    children?: React.ReactNode;
}

export const MuiCustomAutocompletePopper = (props: MuiCustomAutocompletePopperProps) => {
    const { open, anchorEl, autoWidth = true, children } = props;

    const theme = useTheme();

    const TransitionComponent =
        theme.components?.MuiPopover?.defaultProps?.TransitionComponent || Grow;
    const transitionProps = theme.components?.MuiPopover?.defaultProps?.TransitionProps || {
        timeout: {
            exit: 0,
            enter: 220,
            appear: 220
        }
    };

    const popperProps = useMemo<PopperProps>(() => {
        return {
            open,
            anchorEl,
            placement: 'bottom-start',
            style: { zIndex: theme.zIndex.modal },
            transition: true
        };
    }, [anchorEl, open, theme]);

    const paperStyle = useMemo(() => {
        return {
            ...(autoWidth && anchorEl && { width: anchorEl?.clientWidth })
        };
    }, [anchorEl, autoWidth]);

    // Render

    if (!anchorEl) {
        return null;
    }

    return (
        <Popper {...popperProps} className="MuiCustomAutocomplete-popper">
            {(popperParams) => {
                const { TransitionProps, placement } = popperParams;

                return (
                    <TransitionComponent {...TransitionProps} {...transitionProps} unmountOnExit>
                        <Paper
                            className={clsx(
                                'MuiCustomAutocomplete-paper',
                                `u-placement-${placement}`
                            )}
                            sx={paperStyle}
                        >
                            {children}
                        </Paper>
                    </TransitionComponent>
                );
            }}
        </Popper>
    );
};
