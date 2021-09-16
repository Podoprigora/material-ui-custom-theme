import React from 'react';
import { Column, useExpanded, useRowSelect, useTable } from 'react-table';
import { TableHead, TableBody, TableRow } from '@material-ui/core';

import {
    MuiCustomTableContainerProps,
    MuiCustomTableProps,
    MuiCustomTableContainer,
    MuiCustomTable,
    MuiCustomTableCell
} from '../Table';
import { MuiCustomReactTableRow } from './ReactTableRow';

export interface MuiCustomReactTableProps<D extends Record<string, unknown>>
    extends MuiCustomTableProps {
    columns: Array<Column<D>>;
    data: Array<D>;
    enableRowSelect?: boolean;
    enableRowExpand?: boolean;
    PaperProps?: MuiCustomTableContainerProps['PaperProps'];
}

function MuiCustomReactTableWithRef<D extends Record<string, unknown> = Record<string, unknown>>(
    props: MuiCustomReactTableProps<D>,
    forwardedRef: React.Ref<HTMLDivElement>
) {
    const {
        columns,
        data,
        enableRowExpand = false,
        enableRowSelect = false,
        PaperProps,
        ...other
    } = props;

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        ...(enableRowExpand ? [useExpanded] : []),
        ...(enableRowSelect ? [useRowSelect] : [])
    );

    return (
        <MuiCustomTableContainer PaperProps={PaperProps} ref={forwardedRef}>
            <MuiCustomTable {...other} {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => {
                        const { key, ...rowProps } = headerGroup.getHeaderGroupProps();

                        return (
                            <TableRow {...rowProps} key={key}>
                                {headerGroup.headers.map((column) => {
                                    const { key: cellKey, ...cellProps } = column.getHeaderProps();
                                    const { MuiCellProps } = column;

                                    return (
                                        <MuiCustomTableCell
                                            key={cellKey}
                                            {...cellProps}
                                            {...MuiCellProps}
                                        >
                                            {column.render('Header')}
                                        </MuiCustomTableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHead>

                <TableBody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row);

                        const { key } = row.getRowProps();

                        return (
                            <MuiCustomReactTableRow key={key} row={row} oddRow={index % 2 === 0} />
                        );
                    })}
                </TableBody>
            </MuiCustomTable>
        </MuiCustomTableContainer>
    );
}

export const MuiCustomReactTable = React.forwardRef(MuiCustomReactTableWithRef) as <
    D extends Record<string, unknown> = Record<string, unknown>
>(
    props: MuiCustomReactTableProps<D> & { ref?: React.Ref<HTMLDivElement> }
) => JSX.Element;
