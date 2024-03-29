import * as React from "react";
import {FunctionComponent, PropsWithChildren} from "react";
import {styled} from "@mui/material/styles";
import {Box, Grid, Icon} from "@mui/material";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {drawerWidth} from "../../constants/style";
import {LayoutDrawer} from "./Sections/Drawer";
import {DrawerHeader} from "./Sections/Drawer/styled";
import {AuthButton} from "../User/AuthButton";
import {MaterialUIIcons} from "../../constants/MaterialUIIcons";
import SearchBar from "./Sections/SearchBar";
import dynamic from "next/dynamic";
import Link from "next/link";

const SpeedDialContainer = dynamic(() => import("./Sections/SpeedDialContainer"), {ssr: false});

const Main = styled(
        "main",
        {shouldForwardProp: (prop) => prop !== "open"}
)<{
    open?: boolean;
}>(
        ({theme, open}) => (
                {
                    flexGrow: 1,
                    padding: theme.spacing(3),
                    transition: theme.transitions.create("margin", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    marginLeft: `-${drawerWidth}px`,
                    ...(
                            open && {
                                transition: theme.transitions.create("margin", {
                                    easing: theme.transitions.easing.easeOut,
                                    duration: theme.transitions.duration.enteringScreen,
                                }),
                                marginLeft: 0,
                            }
                    ),
                }
        ));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(
        MuiAppBar,
        {
            shouldForwardProp: (prop) => prop !== "open",
        }
)<AppBarProps>(
        ({theme, open}) => (
                {
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    ...(
                            open && {
                                width: `calc(100% - ${drawerWidth}px)`,
                                marginLeft: `${drawerWidth}px`,
                                transition: theme.transitions.create(["margin", "width"], {
                                    easing: theme.transitions.easing.easeOut,
                                    duration: theme.transitions.duration.enteringScreen,
                                }),
                            }
                    ),
                }
        ));


export const Layout: FunctionComponent<PropsWithChildren<{}>> = ({children}) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
            <Box sx={{display: "flex",}}>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    mr: 2, ...(
                                            open && {display: "none"}
                                    )
                                }}
                        >
                            <Icon>{MaterialUIIcons.menu}</Icon>
                        </IconButton>
                        <Grid item container xs={12} justifyContent={"space-between"}
                              alignItems={"center"}>
                            <Grid item>
                                <Grid item container alignItems={"center"}>
                                    <Link href="/" passHref>
                                        <Typography variant="h6" noWrap>
                                            Bakuhub
                                        </Typography>
                                    </Link>
                                    <SearchBar/>
                                </Grid>
                            </Grid>
                            <AuthButton/>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <LayoutDrawer open={open} handleDrawerClose={handleDrawerClose}/>
                <Main open={open}>
                    <DrawerHeader/>
                    {children}
                    <SpeedDialContainer/>
                </Main>
            </Box>
    );
};
export default Layout;