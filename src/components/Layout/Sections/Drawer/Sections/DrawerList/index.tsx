import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Icon from "@mui/material/Icon";
import {useRouter} from "next/router";
import HistoryIcon from "@mui/icons-material/History";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export const DrawerList = () => {
    const DrawerListOptions = [
        {
            text: "create new premise",
            url: "/create/premise",
            icon: AddTaskIcon
        },
        {
            text: "create new snapshot",
            url: "/create/snapshot",
            icon: AddTaskIcon
        }, {
            text: "create new timeline",
            url: "/create/timeline",
            icon: AddTaskIcon
        }, {
            text: "history",
            url: "/user/history",
            icon: HistoryIcon
        }, {
            text: "subscriptions",
            url: "/user/subscriptions",
            icon: SubscriptionsIcon
        }
    ];
    const router = useRouter();
    return <List>
        {DrawerListOptions.map((DrawerListOption, index) => (
                <ListItem button onClick={() => router.push(DrawerListOption.url)}
                          key={DrawerListOption.url}>
                    <ListItemIcon>
                        <Icon component={DrawerListOption.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={DrawerListOption.text}/>
                </ListItem>
        ))}
    </List>;
};