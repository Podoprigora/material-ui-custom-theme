import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as yup from 'yup';
import {
    areEqual,
    FixedSizeList as VirtualizedFixiedSizeList,
    ListChildComponentProps as VirtualizedChildComponentProps
} from 'react-window';

import VirtualizedAutoSizer from 'react-virtualized-auto-sizer';

import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    ListSubheader,
    Icon,
    Divider,
    Button,
    IconButton,
    Checkbox,
    Tooltip
} from '@material-ui/core';
import { InsertDriveFileOutlined } from '@material-ui/icons';
import { MuiCustomSimplebar, MuiCustomSimplebarRef } from '@mui-custom/Simplebar';

import { List, ListProps } from './Template';
import {
    InboxSvg,
    Trash2Svg,
    CheckSvg,
    MapPinSvg,
    ChevronDownSvg,
    ChevronUpSvg
} from '../../assets/svg-icons/feather';

import countriesRawData from '../assets/data/countries.json';

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
    const scrollbarRef = useRef<MuiCustomSimplebarRef>(null);

    const changeScrollPostion = useCallback((offset: number) => {
        if (scrollbarRef.current) {
            const scrolledElement = scrollbarRef.current.getScrollElement();
            const topPos = scrolledElement.scrollTop;

            scrolledElement.scrollTo({
                top: topPos + offset
            });
        }
    }, []);

    const handleScrollDown = useCallback(() => {
        changeScrollPostion(15);
    }, [changeScrollPostion]);

    const handleScrollUp = useCallback(() => {
        changeScrollPostion(-15);
    }, [changeScrollPostion]);

    useEffect(() => {
        console.log(scrollbarRef.current);
    }, []);

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
        <>
            <div className="actions-bar">
                <Tooltip title="Scroll to bottom" open>
                    <IconButton onClick={handleScrollDown}>
                        <Icon>
                            <ChevronDownSvg />
                        </Icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Scroll to top" open>
                    <IconButton onClick={handleScrollUp}>
                        <Icon>
                            <ChevronUpSvg />
                        </Icon>
                    </IconButton>
                </Tooltip>
            </div>
            <MuiCustomSimplebar
                ref={scrollbarRef}
                autoHide={false}
                style={{ width: '100%', maxWidth: '36rem', height: '32rem' }}
            >
                <List disablePadding subheader={<ListSubheader>Nearby towns</ListSubheader>}>
                    {nearbyLoacations.towns.map((item, index) => renderListItems(item.name, index))}
                </List>
                <List disablePadding subheader={<ListSubheader>Other locations</ListSubheader>}>
                    {nearbyLoacations.cities.map((item, index) =>
                        renderListItems(item.name, index)
                    )}
                </List>
            </MuiCustomSimplebar>
        </>
    );
};

// Multiselect list

const multiselectItems = Array.from({ length: 18 }).map((_, index) => {
    return `List item ${index + 1}`;
});

export const MultiselectList = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const [expanded, setExpanded] = useState(false);

    const handleExpandedItemClick = useCallback(() => {
        setExpanded((prevState) => !prevState);
    }, []);

    const handleItemClick = (index: number) => () => {
        setSelected((prevState) => {
            const existedIndex = prevState.indexOf(index);

            if (existedIndex !== -1) {
                return prevState.filter((item) => item !== index);
            }

            return [...prevState, index];
        });
    };

    const limit = expanded ? multiselectItems.length : 8;

    const renderItem = useCallback(
        (text: string, index: number): React.ReactElement => {
            const isSelected = selected.indexOf(index) !== -1;

            return (
                <ListItemButton key={index} selected={isSelected} onClick={handleItemClick(index)}>
                    <ListItemIcon>
                        <Checkbox
                            checked={isSelected}
                            tabIndex={-1}
                            className="MuiCheckbox-dense"
                        />
                    </ListItemIcon>
                    <ListItemText>{text}</ListItemText>
                </ListItemButton>
            );
        },
        [selected]
    );

    const expandedListItem = useMemo(() => {
        return (
            <ListItemButton onClick={handleExpandedItemClick}>
                <ListItemIcon>
                    <Icon>{expanded ? <ChevronUpSvg /> : <ChevronDownSvg />}</Icon>
                </ListItemIcon>
                <ListItemText>{expanded ? 'Show less' : 'Show more'}</ListItemText>
            </ListItemButton>
        );
    }, [expanded, handleExpandedItemClick]);

    return (
        <List>
            {multiselectItems.slice(0, limit).map((item, index) => {
                return renderItem(item, index);
            })}
            {expandedListItem}
        </List>
    );
};

// Virtualized list

const countiesSchema = yup
    .array(
        yup.object().shape({
            code: yup.string().optional(),
            label: yup.string().optional(),
            phone: yup.string().optional()
        })
    )
    .defined();

type CountryItems = yup.Asserts<typeof countiesSchema>;

type VirtualizedItemDataProps = {
    items?: Readonly<CountryItems>;
};

interface VirtualizedListItemProps extends VirtualizedChildComponentProps {
    data: Readonly<VirtualizedItemDataProps>;
}

const VirtualizedListItem = React.memo((props: VirtualizedListItemProps) => {
    const { data, style, index } = props;
    const { items = [] } = data;
    const { code, label, phone } = items[index] || {};

    return (
        <ListItem style={style}>
            <ListItemIcon>
                <Checkbox className="MuiCheckbox-dense" />
            </ListItemIcon>
            <ListItemText sx={{ flex: 'none' }}>{code}</ListItemText>
            <ListItemText>{label}</ListItemText>
            <ListItemText sx={{ flex: 'none' }}>{phone}</ListItemText>
        </ListItem>
    );
}, areEqual);

export const VirtualizedList = () => {
    const [items, setItems] = useState<CountryItems>([]);
    const listRef = useRef<VirtualizedFixiedSizeList>(null);
    const [scrollbarRef, setScrollbarRef] = useState<HTMLElement | null>(null);

    const handleScroll = useCallback((ev: Event) => {
        const target = ev.target as HTMLElement;

        if (listRef.current) {
            listRef.current.scrollTo(target.scrollTop);
        }
    }, []);

    const validateItems = async () => {
        try {
            const validItems = await countiesSchema.validate(countriesRawData);

            setItems(validItems);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        validateItems();
    }, []);

    useEffect(() => {
        if (scrollbarRef) {
            scrollbarRef.addEventListener('scroll', handleScroll, false);

            return () => {
                scrollbarRef.removeEventListener('scroll', handleScroll, false);
            };
        }

        return undefined;
    }, [scrollbarRef, handleScroll]);

    const itemData = useMemo<VirtualizedItemDataProps>(
        () => ({
            items
        }),
        [items]
    );

    if (items.length === 0) {
        return null;
    }

    return (
        <VirtualizedAutoSizer style={{ width: '36rem', height: '32rem' }}>
            {({ height }) => {
                return (
                    <MuiCustomSimplebar style={{ height }} scrollableNodeHandler={setScrollbarRef}>
                        <VirtualizedFixiedSizeList
                            ref={listRef}
                            width="100%"
                            height={height}
                            itemCount={items.length}
                            itemSize={40}
                            itemData={itemData}
                            style={{ overflow: 'initial' }}
                        >
                            {VirtualizedListItem}
                        </VirtualizedFixiedSizeList>
                    </MuiCustomSimplebar>
                );
            }}
        </VirtualizedAutoSizer>
    );
};
