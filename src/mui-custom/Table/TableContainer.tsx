import React from 'react';
import { Paper, PaperProps, TableContainer, TableContainerProps } from '@material-ui/core';

export interface MuiCustomTableContainerProps extends TableContainerProps {
    maxHeight?: string;
    PaperProps?: PaperProps;
}

export const MuiCustomTableContainer = React.forwardRef<
    HTMLDivElement,
    MuiCustomTableContainerProps
>(function MuiCustomTableContainer(props, forwardedRef) {
    const { children, maxHeight, PaperProps: PaperPropsProp, ...other } = props;

    return (
        <Paper {...PaperPropsProp} {...(maxHeight && { sx: { overflow: 'hidden' } })}>
            <TableContainer {...other} {...(maxHeight && { sx: { maxHeight } })} ref={forwardedRef}>
                {children}
            </TableContainer>
        </Paper>
    );
});
