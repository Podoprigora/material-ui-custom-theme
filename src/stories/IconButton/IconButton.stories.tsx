import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

import { IconButton, IconButtonProps } from './Template';
import { TestSvg } from '../../assets/svg-icons';
import {
    AnchorSvg,
    ArrowRightSvg,
    UserSvg,
    CheckCircleSvg,
    EditSvg,
    PlusSvg,
    GridSvg,
    Menu1Svg,
    SquareSvg
} from '../../assets/svg-icons/feather';

export default {
    component: IconButton,
    title: 'mui-custom/IconButton'
} as Meta;

export const Default: Story<IconButtonProps> = (args) => {
    return <IconButton {...args} />;
};

Default.args = {
    children: <FavoriteBorder />
};

export const Examples = () => {
    return (
        <>
            <div className="actions-bar">
                <IconButton size="large">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="medium">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="small">
                    <FavoriteBorder />
                </IconButton>
            </div>
            <div className="actions-bar">
                <IconButton size="large" disabled>
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="medium" disabled>
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="small" disabled>
                    <FavoriteBorder />
                </IconButton>
            </div>
            <div className="actions-bar">
                <IconButton size="large" color="secondary">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="medium" color="secondary">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="small" color="secondary">
                    <FavoriteBorder />
                </IconButton>
            </div>
            <div className="actions-bar">
                <IconButton size="large" color="secondary" disabled>
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="medium" color="secondary" disabled>
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="small" color="secondary" disabled>
                    <FavoriteBorder />
                </IconButton>
            </div>
            <div className="actions-bar">
                <IconButton size="large" color="primary">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="medium" color="primary">
                    <FavoriteBorder />
                </IconButton>
                <IconButton size="small" color="primary">
                    <FavoriteBorder />
                </IconButton>
            </div>

            {/* Custom icon */}

            <div className="actions-bar">
                <IconButton size="large" color="inherit">
                    <Icon>
                        <TestSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <AnchorSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <ArrowRightSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <UserSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <CheckCircleSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <EditSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <PlusSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon>
                        <GridSvg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon fontSize="large">
                        <Menu1Svg />
                    </Icon>
                </IconButton>
                <IconButton size="large" color="inherit">
                    <Icon fontSize="large">
                        <SquareSvg />
                    </Icon>
                </IconButton>
            </div>
        </>
    );
};
