import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import {DrawerList} from "./Sections/DrawerList";
import * as React from "react";
import {DrawerHeader} from "./styled";
import {drawerWidth} from "../../../../constants/style";
import Icon from "@mui/material/Icon";
import useTheme from "@mui/system/useTheme";
import {MaterialUIIcons} from "../../../../constants/MaterialUIIcons";


interface LayoutDrawerProps {
    open: boolean,
    handleDrawerClose: () => void
}

export const LayoutDrawer = ({open, handleDrawerClose}: LayoutDrawerProps) => {
    const theme = useTheme();
    return <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
    >
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <Icon>
                    {theme.direction === "ltr" ? MaterialUIIcons.chevron_left
                                               :MaterialUIIcons.chevron_right}
                </Icon>
            </IconButton>
        </DrawerHeader>
        <Divider/>
        <DrawerList/>
    </Drawer>;
};