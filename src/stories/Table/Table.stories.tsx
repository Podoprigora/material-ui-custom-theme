import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import _upperFirst from 'lodash/upperFirst';

import {
    Chip,
    ChipProps,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';

export default {
    title: 'mui-custom/Table'
} as Meta;

type OrderStatus = 'paid' | 'new' | 'pending' | 'unpaid';

const createOrderData = (
    code: string,
    created: string,
    status: OrderStatus,
    email: string,
    amount: number
) => {
    return { code, created, status, email, amount };
};

const ordersRow: ReturnType<typeof createOrderData>[] = [
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 532.54)
];

const orderStatusColorsMap: Record<OrderStatus, ChipProps['color']> = {
    new: 'secondary',
    paid: 'success',
    pending: 'primary',
    unpaid: 'error'
};

export const Orders: Story = () => {
    const shouldDisplayItems = ordersRow.length > 0;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '50rem' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ width: '12rem', minWidth: '12rem' }}>
                                #
                            </TableCell>
                            <TableCell align="left" sx={{ width: '12rem', minWidth: '12rem' }}>
                                Date
                            </TableCell>
                            <TableCell align="left" sx={{ width: '14rem', minWidth: '14rem' }}>
                                Status
                            </TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="right" sx={{ width: '14rem', minWidth: '10rem' }}>
                                Amount
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shouldDisplayItems &&
                            ordersRow.map((item, index) => {
                                const { code, created, status, email, amount } = item;

                                const color = orderStatusColorsMap[status];

                                return (
                                    <TableRow key={index}>
                                        <TableCell align="left">{code}</TableCell>
                                        <TableCell align="left">{created}</TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{ paddingTop: 0, paddingBottom: 0 }}
                                        >
                                            <Chip
                                                variant="dimmed"
                                                color={color}
                                                size="small"
                                                label={_upperFirst(status)}
                                            />
                                        </TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell align="right">{amount}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
