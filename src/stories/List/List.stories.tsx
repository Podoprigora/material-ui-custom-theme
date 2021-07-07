import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    ListSubheader,
    Icon,
    Divider,
    Button,
    Box,
    IconButton
} from '@material-ui/core';
import { InsertDriveFileOutlined } from '@material-ui/icons';

import { List, ListProps } from './Template';
import {
    FileSvg,
    InboxSvg,
    PlusSvg,
    ChevronRightSvg,
    Trash2Svg,
    CheckSvg,
    MapPinSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/List',
    component: List
} as Meta;

// Default

export const Default: Story<ListProps> = (args) => {
    return (
        <>
            <Button
                color="inherit"
                size="medium"
                variant="contained"
                startIcon={
                    <Icon>
                        <InboxSvg />
                    </Icon>
                }
            >
                Add Item
            </Button>
            <br />
            <Button
                color="inherit"
                size="medium"
                variant="text"
                startIcon={
                    <Icon>
                        <InboxSvg />
                    </Icon>
                }
                className="u-margin-t-4"
            >
                Add Item
            </Button>
            <Divider className="u-margin-t-4" />
            <div style={{ width: '100%', maxWidth: '36rem' }}>
                <List {...args}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>
                                <InboxSvg />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Inbox</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <InsertDriveFileOutlined />
                        </ListItemIcon>
                        <ListItemText>Drafts</ListItemText>
                    </ListItemButton>
                </List>
                <Divider />
                <List>
                    <ListItem
                        disablePadding
                        secondaryAction={
                            <IconButton edge="end">
                                <Icon fontSize="large">
                                    <Trash2Svg />
                                </Icon>
                            </IconButton>
                        }
                    >
                        <ListItemButton>
                            <ListItemText inset>Social</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        secondaryAction={
                            <IconButton edge="end">
                                <Icon fontSize="large">
                                    <Trash2Svg />
                                </Icon>
                            </IconButton>
                        }
                    >
                        <ListItemButton>
                            <ListItemText inset>Updates</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List {...args}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>
                                <CheckSvg />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Rules</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText inset>Layout</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText inset>Computed</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText inset>Changes</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText inset>Fonts</ListItemText>
                    </ListItemButton>
                </List>
                <Divider />
                <List {...args}>
                    <ListItemButton alignItems="flex-start">
                        <ListItemText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </ListItemText>
                        <ListItemText sx={{ flex: 'none', fontWeight: 500 }}>100</ListItemText>
                    </ListItemButton>
                    <ListItemButton alignItems="flex-start">
                        <ListItemText className="u-text-truncate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </ListItemText>
                        <ListItemText sx={{ flex: 'none', fontWeight: 500 }}>100</ListItemText>
                        <ListItemText sx={{ flex: 'none', fontWeight: 500 }}>100</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Lorem ipsum</ListItemText>
                        <ListItemText sx={{ flex: 'none', fontWeight: 500 }}>100</ListItemText>
                    </ListItemButton>
                </List>
            </div>
        </>
    );
};

// Locations list

interface NearbyLoacaions {
    towns: Array<{
        name: string;
    }>;
    cities: Array<{
        name: string;
    }>;
}

const nearbyLoacations: NearbyLoacaions = {
    towns: [
        {
            name: 'Barbican'
        },
        {
            name: 'Aldgate'
        },
        {
            name: 'Tower Hill'
        },
        {
            name: 'Blackfriars'
        },
        {
            name: 'Temple'
        },
        {
            name: 'Southbury'
        },
        {
            name: 'Bush Hill Park'
        },
        {
            name: 'Enfield Town'
        },
        {
            name: 'Forty Hill'
        }
    ],
    cities: [
        {
            name: 'Abbey Hey, Greater Manchester'
        },
        {
            name: 'Aberbargoed / Aberbargod, Gwent'
        },
        {
            name: 'Aberangell, Gwynedd'
        },
        {
            name: 'Abbotstone, Hampshire'
        },
        {
            name: 'Abbey Dore, Herefordshire'
        },
        {
            name: 'Abbots Langley, Hertfordshire'
        },
        {
            name: 'Aberarder, Inverness'
        },
        {
            name: 'Agneash, Isle of Man'
        }
    ]
};

export const LocationsList = () => {
    const renderListItems = (text: string, index: number): React.ReactElement => {
        return (
            <ListItemButton key={index}>
                <ListItemIcon>
                    <Icon fontSize="xsmall">
                        <MapPinSvg />
                    </Icon>
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
            </ListItemButton>
        );
    };

    return (
        <div style={{ width: '100%', maxWidth: '36rem', maxHeight: '34rem', overflow: 'auto' }}>
            <List disablePadding subheader={<ListSubheader>Nearby towns</ListSubheader>}>
                {nearbyLoacations.towns.map((item, index) => renderListItems(item.name, index))}
            </List>
            <List disablePadding subheader={<ListSubheader>Other locations</ListSubheader>}>
                {nearbyLoacations.cities.map((item, index) => renderListItems(item.name, index))}
            </List>
        </div>
    );
};
