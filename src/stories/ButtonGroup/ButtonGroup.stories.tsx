import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Icon } from '@material-ui/core';
import { Menu1Svg, SaveSvg, TagSvg } from '../../assets/svg-icons/feather';
import { ButtonGroup, ButtonGroupProps } from './Template';

export default {
    component: ButtonGroup,
    title: 'mui-custom/ButtonGroup'
} as Meta;

export const Default: Story<ButtonGroupProps> = (args) => {
    return (
        <ButtonGroup {...args}>
            <Button
                startIcon={
                    <Icon>
                        <SaveSvg />
                    </Icon>
                }
            >
                Save
            </Button>
            <Button
                startIcon={
                    <Icon>
                        <SaveSvg />
                    </Icon>
                }
            >
                Save & Create
            </Button>
            <Button
                startIcon={
                    <Icon>
                        <SaveSvg />
                    </Icon>
                }
            >
                Save & Close
            </Button>
        </ButtonGroup>
    );
};

Default.args = {
    variant: 'outlined',
    size: 'medium'
} as ButtonGroupProps;
