import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {Icon} from "@mui/material";
import {useRouter} from "next/router";

export const DrawerList = () => {
    const DrawerListOptions = [{
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