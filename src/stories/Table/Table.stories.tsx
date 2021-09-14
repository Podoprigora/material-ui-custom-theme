import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import _upperFirst from 'lodash/upperFirst';
import formatDate from 'date-fns/format';
import {
    useTable,
    useRowSelect,
    Column,
    CellProps,
    TableToggleAllRowsSelectedProps,
    TableToggleRowsSelectedProps
} from 'react-table';

import {
    Avatar,
    Button,
    Checkbox,
    Chip,
    ChipProps,
    Divider,
    FormControlLabel,
    Icon,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    useEventCallback
} from '@material-ui/core';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';
import {
    BusinessOutlined,
    BusinessRounded,
    ForumRounded,
    InsertDriveFileOutlined,
    MailOutlineOutlined,
    PaymentOutlined,
    PhoneIphoneOutlined,
    PictureAsPdfOutlined
} from '@material-ui/icons';
import NumberFormat from 'react-number-format';

import { MuiCustomTable, MuiCustomTableCell, MuiCustomTableContainer } from '@mui-custom';
import {
    ChevronDownSvg,
    Edit2Svg,
    MoreVerticalSvg,
    Trash2Svg,
    CheckSvg,
    InboxSvg
} from '../../assets/svg-icons/feather';
import { useMountedRef } from '@mui-custom/utils';
import { RandomUser, fetchRandomUsers } from '../services/RandomUsersService';

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

type Order = ReturnType<typeof createOrderData>;

const ordersRow: Order[] = [
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 3453455.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 5345342.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 3453455.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'paid', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'unpaid', 'demo@mail.com', 5345342.54)
];

const orderStatusColorsMap: Record<OrderStatus, ChipProps['color']> = {
    new: 'secondary',
    paid: 'success',
    pending: 'default',
    unpaid: 'error'
};

const OrdersTableMenu = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'ordersTableMenu' });

    return (
        <>
            <IconButton {...bindTrigger(popupState)}>
                <Icon fontSize="medium">
                    <MoreVerticalSvg />
                </Icon>
            </IconButton>
            <Menu
                {...bindMenu(popupState)}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                disableScrollLock
                PaperProps={{}}
                onClick={popupState.close}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall">
                            <Edit2Svg />
                        </Icon>
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall" color="error">
                            <Trash2Svg />
                        </Icon>
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
};

export const Orders: Story = () => {
    const [dense, setDense] = useState(false);
    const [striped, setStriped] = useState(true);
    const [bordered, setBordered] = useState(false);

    const handleDenseSwitchChange = useEventCallback((ev, checked: boolean) => {
        setDense(checked);
    });

    const handleStripedSwitchChange = useEventCallback((ev, checked: boolean) => {
        setStriped(checked);
    });

    const handleBorderedSwitchChange = useEventCallback((ev, checked: boolean) => {
        setBordered(checked);
    });

    const handleCodeLinkClick = useEventCallback((rowData: Order) => {
        console.log({ rowData });
    });

    const columns = useMemo<Column<Order>[]>(
        () => [
            {
                id: 'checkbox',
                Header: (headerProps) => {
                    const { column, getToggleAllRowsSelectedProps } = headerProps;
                    const { title, ...checkboxProps } = getToggleAllRowsSelectedProps
                        ? getToggleAllRowsSelectedProps()
                        : ({} as TableToggleAllRowsSelectedProps);

                    return (
                        <TableCell {...column.getHeaderProps()} padding="checkbox">
                            <Checkbox {...checkboxProps} />
                        </TableCell>
                    );
                },
                Cell: (cellProps: CellProps<Order>) => {
                    const { row, cell } = cellProps;
                    const { title, ...checkboxProps } = row?.getToggleRowSelectedProps
                        ? row.getToggleRowSelectedProps()
                        : ({} as TableToggleRowsSelectedProps);

                    return (
                        <TableCell {...cell.getCellProps()} padding="checkbox">
                            <Checkbox {...checkboxProps} />
                        </TableCell>
                    );
                }
            },
            {
                accessor: 'code',
                Header: (headerProps) => {
                    const { column } = headerProps;

                    return (
                        <TableCell {...column.getHeaderProps()} align="left">
                            #
                        </TableCell>
                    );
                },
                Cell: (cellProps) => {
                    const { value, cell, row } = cellProps;

                    const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
                        ev.preventDefault();

                        handleCodeLinkClick(row.original);
                    };

                    return (
                        <MuiCustomTableCell {...cell.getCellProps()} noWrap>
                            <Tooltip title="Open">
                                <Link
                                    href="#"
                                    color="primary"
                                    underline="always"
                                    onClick={handleClick}
                                >
                                    {value}
                                </Link>
                            </Tooltip>
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                accessor: 'created',
                Header: (headerProps) => {
                    const { column } = headerProps;

                    return (
                        <TableCell {...column.getHeaderProps()} align="left">
                            Date
                        </TableCell>
                    );
                },
                Cell: (cellProps) => {
                    const { value, cell } = cellProps;
                    const formatedDate = formatDate(new Date(value), 'MMM do, yyyy');

                    return (
                        <MuiCustomTableCell noWrap {...cell.getCellProps()}>
                            {formatedDate}
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                accessor: 'status',
                Header: (headerProps) => {
                    const { column } = headerProps;

                    return (
                        <TableCell {...column.getHeaderProps()} align="center">
                            Status
                        </TableCell>
                    );
                },
                Cell: (cellProps) => {
                    const { value, cell } = cellProps;
                    const color = orderStatusColorsMap[value];

                    return (
                        <MuiCustomTableCell align="center" {...cell.getCellProps()}>
                            <Chip
                                variant="dimmed"
                                color={color}
                                size="small"
                                label={_upperFirst(value)}
                            />
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                id: 'details',
                Header: (headerProps) => {
                    const { column } = headerProps;

                    return (
                        <TableCell
                            {...column.getHeaderProps()}
                            align="left"
                            sx={{ minWidth: '20rem' }}
                        >
                            Details
                        </TableCell>
                    );
                },
                Cell: (cellProps: CellProps<Order>) => {
                    const { cell } = cellProps;

                    return (
                        <MuiCustomTableCell truncated {...cell.getCellProps()}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                            doloribus quisquam quae deleniti asperiores nesciunt soluta commodi
                            eaque aut, facilis, temporibus exercitationem quos ad.
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                accessor: 'amount',
                Header: (headerProps) => {
                    const { column } = headerProps;

                    return (
                        <TableCell {...column.getHeaderProps()} align="right">
                            Amount
                        </TableCell>
                    );
                },
                Cell: (cellProps) => {
                    const { value, cell } = cellProps;

                    return (
                        <MuiCustomTableCell align="right" {...cell.getCellProps()}>
                            <NumberFormat
                                value={value}
                                thousandSeparator=","
                                decimalSeparator="."
                                prefix="£"
                                displayType="text"
                            />
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                id: 'actions',
                Header: (headerProps) => <TableCell {...headerProps.column.getHeaderProps()} />,
                Cell: (cellProps: CellProps<Order>) => {
                    const { cell } = cellProps;

                    return (
                        <MuiCustomTableCell padding="action" {...cell.getCellProps()}>
                            <Stack direction="row" flexWrap="nowrap" spacing={1}>
                                <Tooltip title="Send message">
                                    <IconButton color="primary">
                                        <ForumRounded fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Add payment">
                                    <IconButton color="primary">
                                        <PaymentOutlined fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Generate invoice">
                                    <IconButton color="primary">
                                        <PictureAsPdfOutlined fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </MuiCustomTableCell>
                    );
                }
            },
            {
                id: 'more-actions',
                Header: (headerProps) => <TableCell {...headerProps.column.getHeaderProps()} />,
                Cell: (cellProps: CellProps<Order>) => {
                    const { cell } = cellProps;

                    return (
                        <MuiCustomTableCell padding="action" {...cell.getCellProps()}>
                            <OrdersTableMenu />
                        </MuiCustomTableCell>
                    );
                }
            }
        ],
        [handleCodeLinkClick]
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            autoResetSelectedRows: false,
            columns,
            data: ordersRow
        },
        useRowSelect
    );

    const shouldDisplayItems = rows.length > 0;

    if (!shouldDisplayItems) {
        return <div />;
    }

    return (
        <>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-end"
                gap={10}
                sx={{ paddingTop: 8, paddingBottom: 8 }}
            >
                <FormControlLabel
                    label="Striped"
                    control={
                        <Switch
                            checked={striped}
                            color="primary"
                            size="small"
                            onChange={handleStripedSwitchChange}
                        />
                    }
                />
                <FormControlLabel
                    label="Bordered"
                    control={
                        <Switch
                            checked={bordered}
                            color="primary"
                            size="small"
                            onChange={handleBorderedSwitchChange}
                        />
                    }
                />
                <FormControlLabel
                    label="Dense"
                    control={
                        <Switch
                            checked={dense}
                            color="primary"
                            size="small"
                            onChange={handleDenseSwitchChange}
                        />
                    }
                />
            </Stack>

            <MuiCustomTableContainer PaperProps={{ maxHeight: '50rem' }}>
                <MuiCustomTable
                    stickyHeader
                    striped={striped}
                    bordered={bordered}
                    size={dense ? 'small' : 'medium'}
                    {...getTableProps()}
                >
                    <TableHead>
                        {headerGroups.map((headerGroup) => {
                            const { key, ...rowProps } = headerGroup.getHeaderGroupProps();

                            return (
                                <TableRow {...rowProps} key={key}>
                                    {headerGroup.headers.map((column) => {
                                        const { key: headerKey } = column.getHeaderProps();

                                        return column.render('Header', { key: headerKey });
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableHead>

                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);

                            const { key, ...rowProps } = row.getRowProps();

                            return (
                                <TableRow key={key} {...rowProps} hover selected={row?.isSelected}>
                                    {row.cells.map((cell) => {
                                        const { key: cellKey } = cell.getCellProps();

                                        return cell.render('Cell', { key: cellKey });
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </MuiCustomTable>
            </MuiCustomTableContainer>
        </>
    );
};

// Clients

export const Clients: Story = () => {
    const [items, setItems] = useState<RandomUser[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const isMountedRef = useMountedRef();

    const fetchUsers = useCallback(async () => {
        try {
            setLoading(true);
            setError('');
            const response = await fetchRandomUsers(25);

            if (isMountedRef.current) {
                setLoading(false);
                setItems(response || []);
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    }, [isMountedRef]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const shouldDisplayItems = items.length > 0;

    if (!shouldDisplayItems) {
        return <div />;
    }

    return (
        <MuiCustomTableContainer PaperProps={{ maxHeight: '50rem' }}>
            <MuiCustomTable stickyHeader bordered>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Contacts</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, index) => {
                        const { id, picture, name, email, phone, location } = item;
                        const rowKey = id?.value || index;

                        return (
                            <TableRow key={rowKey} hover>
                                <MuiCustomTableCell>
                                    <Avatar
                                        variant="circular"
                                        style={{ width: '5.2rem', height: '5.2rem' }}
                                        src={picture?.large}
                                        imgProps={{ loading: 'lazy', width: '5.2rem' }}
                                        className="MuiAvatar-colorPrimary"
                                    >
                                        {String(name?.first).charAt(0)}
                                    </Avatar>
                                </MuiCustomTableCell>
                                <MuiCustomTableCell>
                                    <Link href="#" underline="always">
                                        {name?.first} {name?.last}
                                    </Link>
                                </MuiCustomTableCell>
                                <MuiCustomTableCell>
                                    {location?.country && (
                                        <List disablePadding>
                                            <ListItem disablePadding disableGutters>
                                                <ListItemIcon sx={{ alignSelf: 'flex-start' }}>
                                                    <BusinessRounded />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {location?.country && `${location?.country}, `}
                                                    {location?.city && `${location?.city}`}
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem disablePadding disableGutters>
                                                <ListItemText inset>
                                                    {location?.street?.number &&
                                                        `${location?.street?.number}, `}
                                                    {location?.street?.name &&
                                                        `${location?.street?.name}`}
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    )}
                                </MuiCustomTableCell>
                                <MuiCustomTableCell valign="top">
                                    <List disablePadding>
                                        {phone && (
                                            <ListItem dense disableGutters>
                                                <ListItemIcon>
                                                    <PhoneIphoneOutlined />
                                                </ListItemIcon>
                                                <ListItemText>{phone}</ListItemText>
                                            </ListItem>
                                        )}
                                        {email && (
                                            <ListItem dense disableGutters>
                                                <ListItemIcon>
                                                    <MailOutlineOutlined />
                                                </ListItemIcon>
                                                <ListItemText>{email}</ListItemText>
                                            </ListItem>
                                        )}
                                    </List>
                                </MuiCustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MuiCustomTable>
        </MuiCustomTableContainer>
    );
};
