import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Grow, Paper, Popper, PopperProps, useTheme } from '@material-ui/core';

interface MuiCustomAutocompletePopperProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    children?: React.ReactNode;
}

export const MuiCustomAutocompletePopper = (props: MuiCustomAutocompletePopperProps) => {
    const { open, anchorEl, children } = props;

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

    return (
        <Popper {...popperProps}>
            {(popperParams) => {
                const { TransitionProps, placement } = popperParams;

                return (
                    <TransitionComponent {...TransitionProps} {...transitionProps} unmountOnExit>
                        <Paper
                            className={clsx(
                                'MuiCustomAutocomplete-paper',
                                `u-placement-${placement}`
                            )}
                            sx={{ width: anchorEl?.clientWidth }}
                        >
                            {children}
                        </Paper>
                    </TransitionComponent>
                );
            }}
        </Popper>
    );
};
