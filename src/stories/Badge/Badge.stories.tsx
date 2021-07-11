import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Icon, IconButton } from '@material-ui/core';

import { Badge, BadgeProps } from './Template';
import { HeartSvg, MessageSquareSvg } from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Badge',
    component: Badge
} as Meta;

export const Default: Story<BadgeProps> = (args) => {
    return (
        <Badge {...args}>
            <IconButton className="MuiIconButton-dense">
                <Icon fontSize="large">
                    <HeartSvg />
                </Icon>
            </IconButton>
        </Badge>
    );
};

Default.args = {
    badgeContent: 5,
    color: 'primary'
} as BadgeProps;

export const Exmaples = () => {
    return (
        <>
            <Badge
                badgeContent={500}
                color="primary"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Button color="inherit" startIcon={<MessageSquareSvg />}>
                    Messages
                </Button>
            </Badge>
        </>
    );
};
