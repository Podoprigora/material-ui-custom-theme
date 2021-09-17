import React from 'react';
import clsx from 'clsx';
import { TableCell, TableCellProps } from '@material-ui/core';

type ExtendedProps = Omit<TableCellProps, 'padding'>;

export interface MuiCustomTableCellProps extends ExtendedProps {
    noWrap?: boolean;
    truncated?: boolean;
    padding?: TableCellProps['padding'] | 'action';
    thSortable?: boolean;
}

export const MuiCustomTableCell = React.forwardRef<unknown, MuiCustomTableCellProps>(
    function MuiCustomTableCell(props, forwardedRef) {
        const {
            noWrap,
            truncated,
            children: childrenProp,
            style: styleProp,
            className: classNameProp,
            padding,
            thSortable,
            ...other
        } = props;

        const style: React.CSSProperties = {
            ...styleProp,
            ...(noWrap && { whiteSpace: 'nowrap' })
        };

        const className = clsx(classNameProp, {
            'MuiTableCell-paddingAction': padding === 'action',
            'MuiTableCell-paddingCheckbox': padding === 'checkbox',
            'MuiTableCell-sortable': thSortable
        });

        const children: React.ReactNode = truncated ? (
            <div className="MuiTableCell-truncatedContainer">
                <div className="MuiTableCell-truncated">{childrenProp}</div>
            </div>
        ) : (
            childrenProp
        );

        return (
            <TableCell
                {...(other as unknown)}
                style={style}
                className={className}
                ref={forwardedRef}
            >
                {children}
            </TableCell>
        );
    }
);
