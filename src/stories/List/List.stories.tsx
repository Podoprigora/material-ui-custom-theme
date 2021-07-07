import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
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
    Trash2Svg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/List',
    component: List
} as Meta;

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
                                <Icon>
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
                                <Icon>
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
                    <ListItemButton alignItems="flex-start">
                        <ListItemText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </ListItemText>
                        <ListItemText sx={{ flex: 'none', fontWeight: 500 }}>100</ListItemText>
                    </ListItemButton>
                    <ListItemButton alignItems="flex-start">
                        <ListItemText
                            sx={{
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'
                            }}
                        >
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
