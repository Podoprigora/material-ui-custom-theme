import React, { useState, useMemo } from 'react';
import {
    FormControl,
    FormHelperText,
    FormLabel,
    TextField,
    Icon,
    IconButton,
    InputAdornment,
    InputBase,
    useEventCallback
} from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    MuiCustomTextField,
    MuiCustomOriginalInput,
    MuiCustomOriginalInputLabel,
    MuiCustomFormControl
} from '@mui-custom';

import {
    CoffeeSvg,
    EyeOffSvg,
    EyeSvg,
    LockSvg,
    MapPinSvg,
    TagSvg,
    ThumbsDownSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Input',
    component: InputBase
} as Meta;

const usePasswordField = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = useEventCallback(() => {
        setPasswordVisible((prevState) => !prevState);
    });

    return useMemo(() => ({ isPasswordVisible, togglePasswordVisibility } as const), [
        isPasswordVisible,
        togglePasswordVisibility
    ]);
};

export const OriginalInput: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--gap-10"
                style={{ width: '100%', maxWidth: '40rem' }}
            >
                {/* <MuiCustomTextField
                    id="custom-email-field"
                    label="Email"
                    placeholder="Enter your email"
                    required
                    fullWidth
                    helperText="example@gmail.com"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <UserSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                /> */}
                <MuiCustomFormControl required fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="email-input">
                        Email
                    </MuiCustomOriginalInputLabel>
                    <MuiCustomOriginalInput
                        id="email-input"
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
                    <FormHelperText>example@gmail.com</FormHelperText>
                </MuiCustomFormControl>
                <MuiCustomFormControl required fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="password-input">
                        Password
                    </MuiCustomOriginalInputLabel>
                    <InputBase
                        id="password-input"
                        type={isPasswordVisible ? 'text' : 'password'}
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
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                        className="MuiCustomOriginalInput"
                    />
                </MuiCustomFormControl>
                <MuiCustomFormControl color="secondary" fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="placement-input">
                        Location
                    </MuiCustomOriginalInputLabel>
                    <InputBase
                        id="placement-input"
                        type="text"
                        placeholder="Enter coordinates"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <MapPinSvg />
                                </Icon>
                            </InputAdornment>
                        }
                        className="MuiCustomOriginalInput"
                    />
                    <FormHelperText>Example: 51.5091996,-0.1209507</FormHelperText>
                </MuiCustomFormControl>
                <MuiCustomFormControl color="secondary" fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="comment-input">
                        Comment
                    </MuiCustomOriginalInputLabel>
                    <InputBase
                        id="comment-input"
                        placeholder="Enter your comment"
                        multiline
                        minRows={4}
                        className="MuiCustomOriginalInput"
                    />
                </MuiCustomFormControl>
                <MuiCustomFormControl disabled required fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="custom-disabled-input">
                        Disabled
                    </MuiCustomOriginalInputLabel>
                    <InputBase
                        id="custom-disabled-input"
                        placeholder="Placeholder"
                        defaultValue="Lorem iposm"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <CoffeeSvg />
                                </Icon>
                            </InputAdornment>
                        }
                        className="MuiCustomOriginalInput"
                    />
                    <FormHelperText>test note</FormHelperText>
                </MuiCustomFormControl>
                <MuiCustomFormControl error required fullWidth>
                    <MuiCustomOriginalInputLabel htmlFor="custom-error-input">
                        Invalid field
                    </MuiCustomOriginalInputLabel>
                    <InputBase
                        id="custom-error-input"
                        placeholder="Placeholder"
                        defaultValue="Lorem iposm"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <ThumbsDownSvg />
                                </Icon>
                            </InputAdornment>
                        }
                        className="MuiCustomOriginalInput"
                    />
                    <FormHelperText>Some error message</FormHelperText>
                </MuiCustomFormControl>
            </div>
        </>
    );
};

// Standard Inputs
export const StandardInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
                style={{ maxWidth: '40rem' }}
            >
                <TextField
                    id="standard-field-email"
                    variant="standard"
                    label="Email"
                    required
                    fullWidth
                    helperText="example@mail.com"
                />
                <TextField
                    id="standard-field-password"
                    variant="standard"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="standard"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <TextField
                    id="standard-field-no-label"
                    variant="standard"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="standard"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <TextField
                    id="standard-disabled-field"
                    variant="standard"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <TextField
                    id="standard-error-field"
                    variant="standard"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
StandardInputExample.storyName = 'Standard Input';

// Standard filled inputs

export const StandardFilledInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
                style={{ maxWidth: '40rem' }}
            >
                <TextField
                    id="standard-filled-field-email"
                    variant="filled"
                    label="Email"
                    required
                    fullWidth
                    helperText="example@mail.com"
                />
                <TextField
                    id="standard-filled-field-password"
                    variant="filled"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="filled"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <TextField
                    variant="filled"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="filled"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <TextField
                    id="filled-disabled-field"
                    variant="filled"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <TextField
                    id="filled-error-field"
                    variant="filled"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
StandardFilledInputExample.storyName = 'Standard filled input';

// Outlined Inputs

export const OutlinedInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-12"
                style={{ maxWidth: '40rem' }}
            >
                <TextField
                    variant="outlined"
                    label="Email"
                    // defaultValue="jonh.doe@email.com"
                    required
                    fullWidth
                    // InputLabelProps={{ shrink: true }}
                    // InputProps={{ notched: true }}
                    helperText="example@mail.com"
                />
                <TextField
                    variant="outlined"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <TextField
                    id="outlined-disabled-field"
                    variant="outlined"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <TextField
                    id="outlined-error-field"
                    variant="outlined"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
OutlinedInputExample.storyName = 'Outlined Input';
