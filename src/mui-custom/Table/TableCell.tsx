import React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

export interface MuiCustomTableCellProps extends TableCellProps {
    noWrap?: boolean;
    truncated?: boolean;
}

export const MuiCustomTableCell = React.forwardRef<unknown, MuiCustomTableCellProps>(
    function MuiCustomTableCell(props, forwardedRef) {
        const { noWrap, truncated, children: childrenProp, style: styleProp, ...other } = props;

        const style: React.CSSProperties = {
            ...styleProp,
            ...(noWrap && { whiteSpace: 'nowrap' })
        };

        const children: React.ReactNode = truncated ? (
            <div className="MuiTableCell-truncatedContainer">
                <div className="MuiTableCell-truncated">{childrenProp}</div>
            </div>
        ) : (
            childrenProp
        );

        return (
            <TableCell {...other} style={style} ref={forwardedRef}>
                {children}
            </TableCell>
        );
    }
);
