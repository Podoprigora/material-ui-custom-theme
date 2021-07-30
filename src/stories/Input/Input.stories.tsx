import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    InputBase,
    FormControl,
    FormLabel,
    InputAdornment,
    Button,
    Icon,
    IconButton
} from '@material-ui/core';
import { AlternateEmailRounded, MailOutlineRounded, SearchRounded } from '@material-ui/icons';
import {
    EyeOffSvg,
    EyeSvg,
    LockSvg,
    MapPinSvg,
    SaveSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Input',
    component: InputBase
} as Meta;

export const InputBaseExample: Story = () => {
    return (
        <>
            <div className="stack stack--direction-column stack--gap-10">
                <Button
                    size="medium"
                    variant="contained"
                    startIcon={
                        <Icon fontSize="large" color="inherit">
                            <SaveSvg />
                        </Icon>
                    }
                >
                    Save changes
                </Button>
                <div className="stack stack--alignItemsEnd stack--justifyItemsStart stack--justifySelfStretch">
                    <FormControl required sx={{ width: '30rem' }}>
                        <FormLabel>Email</FormLabel>
                        <InputBase
                            type="email"
                            placeholder="Enter your email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Icon>
                                        <UserSvg />
                                    </Icon>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button variant="contained">Submit</Button>
                </div>
                <FormControl required sx={{ width: '30rem' }}>
                    <InputBase
                        type="password"
                        placeholder="Enter password"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <LockSvg />
                                </Icon>
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                >
                                    <Icon>
                                        <EyeOffSvg />
                                    </Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl required sx={{ width: '30rem' }}>
                    <InputBase
                        type="text"
                        placeholder="Enter coordinates"
                        endAdornment={
                            <InputAdornment position="end">
                                <Icon fontSize="small">
                                    <MapPinSvg />
                                </Icon>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ width: '30rem' }}>
                    <InputBase placeholder="Enter your comment" multiline minRows={4} />
                </FormControl>
            </div>
        </>
    );
};
InputBaseExample.storyName = 'Input Base';
