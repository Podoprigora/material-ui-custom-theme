import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import _upperFirst from 'lodash/upperFirst';
import formatDate from 'date-fns/format';

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

const ordersRow: ReturnType<typeof createOrderData>[] = [
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'new', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
    createOrderData('94812-44', '2021-05-28', 'pending', 'demo@mail.com', 532.54),
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

    const renderAmount = useMemo(() => {
        return (amount: number) => {
            return (
                <NumberFormat
                    value={amount}
                    thousandSeparator=","
                    decimalSeparator="."
                    prefix="£"
                    displayType="text"
                />
            );
        };
    }, []);

    const shouldDisplayItems = ordersRow.length > 0;

    return (
        <>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-end"
                gap={6}
                sx={{ paddingTop: 8, paddingBottom: 8 }}
            >
                <FormControlLabel
                    label="Striped"
                    control={
                        <Switch
                            checked={striped}
                            color="primary"
                            size="small"
                            sx={{ marginRight: 4 }}
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
                            sx={{ marginRight: 4 }}
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
                            sx={{ marginRight: 4 }}
                            onChange={handleDenseSwitchChange}
                        />
                    }
                />
            </Stack>

            <MuiCustomTableContainer maxHeight="40rem">
                <MuiCustomTable
                    stickyHeader
                    striped={striped}
                    bordered={bordered}
                    size={dense ? 'small' : 'medium'}
                >
                    <TableHead>
                        <TableRow>
                            <MuiCustomTableCell padding="checkbox">
                                <Checkbox />
                            </MuiCustomTableCell>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell sx={{ minWidth: '20rem' }}>Details</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {shouldDisplayItems &&
                            ordersRow.map((item, index) => {
                                const { code, created, status, amount } = item;
                                const color = orderStatusColorsMap[status];
                                const formatedDate = formatDate(new Date(created), 'MMM do, yyyy');

                                return (
                                    <TableRow key={index}>
                                        <MuiCustomTableCell padding="checkbox">
                                            <Checkbox />
                                        </MuiCustomTableCell>
                                        <MuiCustomTableCell noWrap>
                                            <Tooltip title="Open">
                                                <Link href="#" color="primary">
                                                    {code}
                                                </Link>
                                            </Tooltip>
                                        </MuiCustomTableCell>
                                        <MuiCustomTableCell noWrap>
                                            {formatedDate}
                                        </MuiCustomTableCell>
                                        <MuiCustomTableCell align="center">
                                            <Chip
                                                variant="dimmed"
                                                color={color}
                                                size="small"
                                                label={_upperFirst(status)}
                                            />
                                        </MuiCustomTableCell>
                                        <MuiCustomTableCell truncated>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Sequi doloribus quisquam quae deleniti asperiores
                                            nesciunt soluta commodi eaque aut, facilis, temporibus
                                            exercitationem quos ad.
                                        </MuiCustomTableCell>
                                        <TableCell align="right">{renderAmount(amount)}</TableCell>
                                        <MuiCustomTableCell padding="action">
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
                                        <MuiCustomTableCell padding="action">
                                            <OrdersTableMenu />
                                        </MuiCustomTableCell>
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
        <MuiCustomTableContainer maxHeight="50rem">
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
                            <TableRow key={rowKey}>
                                <MuiCustomTableCell>
                                    <Avatar
                                        variant="circular"
                                        style={{ width: '5.2rem', height: '5.2rem' }}
                                        src={picture?.large}
                                    />
                                </MuiCustomTableCell>
                                <MuiCustomTableCell>
                                    <Link href="#" color="primary">
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
