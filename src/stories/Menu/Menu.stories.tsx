import React, { useCallback, useMemo, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import {
    Button,
    Divider,
    Fade,
    Icon,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Menu,
    MenuItem,
    MenuList,
    Modal,
    Paper,
    Portal,
    useEventCallback
} from '@material-ui/core';
import {
    Check,
    ColorLensOutlined,
    FiberManualRecord,
    FormatAlignCenterRounded,
    FormatAlignLeftRounded,
    FormatAlignRightRounded,
    FormatColorTextRounded,
    KeyboardArrowDown,
    KeyboardArrowRightRounded,
    Sort
} from '@material-ui/icons';

import { MuiCustomMenu, MuiCustomSubMenu } from '@mui-custom';
import {
    usePopupState,
    bindTrigger,
    bindMenu,
    bindToggle,
    bindHover,
    bindPopper
} from 'material-ui-popup-state/hooks';

import { CopySvg, Edit2Svg, Trash2Svg } from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Menu',
    component: Menu
} as Meta;

export const Basic = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'basicMenu' });

    return (
        <>
            <Button
                variant="outlined"
                color="inherit"
                endIcon={
                    <Icon fontSize="xsmall">
                        <KeyboardArrowDown />
                    </Icon>
                }
                {...bindTrigger(popupState)}
            >
                Basic menu
            </Button>
            <Menu {...bindMenu(popupState)} onClick={popupState.close}>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall">
                            <Edit2Svg />
                        </Icon>
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall">
                            <CopySvg />
                        </Icon>
                    </ListItemIcon>
                    Copy
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

interface SelectedMenuOption {
    name: string;
}

const selectedMenuOptions: SelectedMenuOption[] = [
    { name: 'Relevance' },
    { name: 'Price up' },
    { name: 'Price down' },
    { name: 'Brand new' },
    { name: 'Top seller' },
    { name: 'Name' }
];

export const SelectedMenu = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'selectedMenu' });
    const [selectedOption, setSelectedOption] = useState<SelectedMenuOption | undefined>();

    const handlePopupClose = useEventCallback(() => {
        popupState.close();
    });

    // Render

    const buttonText = useMemo<string>(() => {
        const foundOption = selectedMenuOptions.find(
            (option) => selectedOption && option.name === selectedOption.name
        );

        return (foundOption && foundOption.name) || 'Sort By';
    }, [selectedOption]);

    const items = useMemo(() => {
        return selectedMenuOptions.map((option) => {
            const { name } = option;
            const key = name.replace(/\s+/g, '-');
            const selected = selectedOption && selectedOption.name === name;

            const handleMenuItemSelect = (opt: SelectedMenuOption) => () => {
                setSelectedOption(opt);
                handlePopupClose();
            };

            return (
                <MenuItem key={key} selected={selected} onClick={handleMenuItemSelect(option)}>
                    {selected ? (
                        <>
                            <ListItemText>
                                <span className="u-text-strong u-text-primary">{name}</span>
                            </ListItemText>
                            <ListItemIcon sx={{ flex: 'none' }}>
                                <Icon color="primary" fontSize="medium">
                                    <Check />
                                </Icon>
                            </ListItemIcon>
                        </>
                    ) : (
                        <ListItemText>{name}</ListItemText>
                    )}
                </MenuItem>
            );
        });
    }, [selectedOption, handlePopupClose]);

    return (
        <>
            <Button
                variant="text"
                color="inherit"
                startIcon={
                    <Icon fontSize="large">
                        <Sort />
                    </Icon>
                }
                endIcon={
                    <Icon fontSize="xsmall">
                        <KeyboardArrowDown />
                    </Icon>
                }
                style={{ minWidth: '20rem' }}
                className="MuiButton-justifyStart"
                {...bindTrigger(popupState)}
            >
                <span className="u-text-strong">{buttonText}</span>
            </Button>
            <Menu
                PaperProps={{ sx: { width: '100%', maxWidth: '20rem' } }}
                {...bindMenu(popupState)}
            >
                {items}
            </Menu>
        </>
    );
};

export const NestedMenu = () => {
    const popupState = usePopupState({ variant: 'popper', popupId: 'nestedMenu' });

    const handleClose = useCallback(() => {
        popupState.close();
    }, [popupState]);

    return (
        <>
            <Button
                {...bindToggle(popupState)}
                variant="text"
                color="inherit"
                endIcon={
                    <Icon fontSize="xsmall">
                        <KeyboardArrowDown />
                    </Icon>
                }
            >
                Nested menu
            </Button>
            <MuiCustomMenu {...bindPopper(popupState)} onClose={handleClose} onClick={handleClose}>
                <MuiCustomSubMenu
                    title={
                        <>
                            <ListItemIcon>
                                <Icon fontSize="medium">
                                    <ColorLensOutlined />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText>Change color</ListItemText>
                        </>
                    }
                >
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="medium" sx={{ color: 'red' }}>
                                <FiberManualRecord />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Red</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="medium" sx={{ color: 'blue' }}>
                                <FiberManualRecord />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Blue</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="medium" sx={{ color: 'green' }}>
                                <FiberManualRecord />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Green</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="medium" sx={{ color: 'gray' }}>
                                <FiberManualRecord />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Gray</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="medium" sx={{ color: 'black' }}>
                                <FiberManualRecord />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Black</ListItemText>
                    </MenuItem>
                </MuiCustomSubMenu>
                <MuiCustomSubMenu title="Aligns">
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="small">
                                <FormatAlignCenterRounded />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Center</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="small">
                                <FormatAlignLeftRounded />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Left</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Icon fontSize="small">
                                <FormatAlignRightRounded />
                            </Icon>
                        </ListItemIcon>
                        <ListItemText>Right</ListItemText>
                    </MenuItem>
                </MuiCustomSubMenu>
                <Divider variant="middle" />
                <MuiCustomSubMenu
                    title="Switch Group"
                    PaperProps={{ sx: { width: '100%', maxWidth: '30rem' } }}
                >
                    <MenuItem>Group 1</MenuItem>
                    <MenuItem>Group 2</MenuItem>
                    <MenuItem disabled>Group 3</MenuItem>
                    <MenuItem disabled>Group 4</MenuItem>
                    <Divider variant="middle" />
                    <MenuItem>Next Group</MenuItem>
                    <MenuItem>Previous Group</MenuItem>
                    <Divider variant="middle" />
                    <MenuItem>
                        <ListItemText>Group Left</ListItemText>
                        <ListItemText sx={{ flex: 'none' }}>
                            <span className="u-text-note u-text-small">Ctrl+K Ctrl+LeftArrow</span>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Group Right</ListItemText>
                        <ListItemText sx={{ flex: 'none' }}>
                            <span className="u-text-note u-text-small">Ctrl+K Ctrl+RightArrow</span>
                        </ListItemText>
                    </MenuItem>
                </MuiCustomSubMenu>
            </MuiCustomMenu>
        </>
    );
};
