import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import {DrawerList} from "./Sections/DrawerList";
import * as React from "react";
import {DrawerHeader} from "./styled";
import {drawerWidth} from "../../../../constants/style";
import {useTheme} from "@mui/system";

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
                {theme.direction==="ltr" ? <ChevronLeftIcon/>:<ChevronRightIcon/>}
            </IconButton>
        </DrawerHeader>
        <Divider/>
        <DrawerList/>
    </Drawer>;
};