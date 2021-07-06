import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Icon,
    Divider,
    Button
} from '@material-ui/core';
import { InsertDriveFileOutlined } from '@material-ui/icons';

import { List, ListProps } from './Template';
import { FileSvg, InboxSvg, PlusSvg } from '../../assets/svg-icons/feather';

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
                        <PlusSvg />
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
                <List {...args}>
                    <ListItemButton>
                        <ListItemText>Trash</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>Spam</ListItemText>
                        <ListItemIcon>
                            <Icon>
                                <InsertDriveFileOutlined />
                            </Icon>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </div>
        </>
    );
};
