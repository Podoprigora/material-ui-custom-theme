import { createCtx } from '@mui-custom/utils';

export type MuiCustomReactTableRowContextValue = {
    selected?: boolean;
    expanded?: boolean;
};

export const MuiCustomReactTableRowContext = createCtx<MuiCustomReactTableRowContextValue>();
export const useMuiCustomReactTableRow = MuiCustomReactTableRowContext.useContext;
