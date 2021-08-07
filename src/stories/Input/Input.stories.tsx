import React, { useState, useMemo } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    TextField,
    Icon,
    IconButton,
    InputAdornment,
    Input,
    InputBase,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useEventCallback
} from '@material-ui/core';
import { InsertDriveFileOutlined, Tag } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
    EyeOffSvg,
    EyeSvg,
    InboxSvg,
    LockSvg,
    MapPinSvg,
    SaveSvg,
    TagSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Input',
    component: InputBase
} as Meta;

const usePasswordFieldVisible = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = useEventCallback(() => {
        setPasswordVisible((prevState) => !prevState);
    });

    return useMemo(() => ({ isPasswordVisible, togglePasswordVisibility } as const), [
        isPasswordVisible,
        togglePasswordVisibility
    ]);
};

export const CustomInput: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordFieldVisible();

    return (
        <>
            <div
                className="stack stack--direction-column stack--gap-10"
                style={{ width: '100%', maxWidth: '40rem' }}
            >
                <FormControl
                    required
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                    fullWidth
                >
                    <FormLabel htmlFor="email-input" className="MuiCustomFormLabel">
                        Email
                    </FormLabel>
                    <InputBase
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
                        className="MuiCustomInputBase"
                    />
                    <FormHelperText>example@gmail.com</FormHelperText>
                </FormControl>
                <FormControl
                    required
                    fullWidth
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                >
                    <FormLabel htmlFor="password-input" className="MuiCustomFormLabel">
                        Password
                    </FormLabel>
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
                        className="MuiCustomInputBase"
                    />
                </FormControl>
                <FormControl
                    color="secondary"
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                    fullWidth
                >
                    <FormLabel htmlFor="placement-input" className="MuiCustomFormLabel">
                        Location
                    </FormLabel>
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
                        className="MuiCustomInputBase"
                    />
                    <FormHelperText>Example: 51.5091996,-0.1209507</FormHelperText>
                </FormControl>
                <FormControl
                    color="secondary"
                    fullWidth
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                >
                    <FormLabel htmlFor="comment-input" className="MuiCustomFormLabel">
                        Comment
                    </FormLabel>
                    <InputBase
                        id="comment-input"
                        placeholder="Enter your comment"
                        multiline
                        minRows={4}
                        className="MuiCustomInputBase"
                    />
                </FormControl>
            </div>
        </>
    );
};

// Standard Inputs
export const StandardInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordFieldVisible();

    return (
        <>
            <div
                className="stack stack--direction-column stack--gap-10"
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
            </div>
        </>
    );
};
StandardInputExample.storyName = 'Standard Input';

// Standard filled inputs

export const StandardFilledInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordFieldVisible();

    return (
        <>
            <div
                className="stack stack--direction-column stack--gap-10"
                style={{ maxWidth: '40rem' }}
            >
                <TextField
                    id="standard-field-email"
                    variant="filled"
                    label="Email"
                    required
                    fullWidth
                    helperText="example@mail.com"
                />
                <TextField
                    id="standard-field-password"
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
            </div>
        </>
    );
};
StandardFilledInputExample.storyName = 'Standard filled input';

// Outlined Inputs
// export const OutlinedInputExample: Story = () => {
//     return <TextField id="outlined-field-email" variant="outlined" label="Email" required />;
// };
// OutlinedInputExample.storyName = 'Outlined Input';
