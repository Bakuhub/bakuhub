import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {useRouter} from "next/router";
import {MaterialUIIcons} from "../../../../constants/MaterialUIIcons";
import Icon from "@mui/material/Icon";

const actions = [
    {icon: MaterialUIIcons.timeline, name: "TimeLine", link: "/create/timeline"},
    {icon: MaterialUIIcons.post_add, name: "Premise", link: "/create/premise"},
    {icon: MaterialUIIcons.add_a_photo, name: "Snapshot", link: "/create/snapshot"},
];

export default function SpeedDialContainer() {
    const router = useRouter();
    return (
            <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{position: "fixed", bottom: 16, right: 16}}
                    icon={<SpeedDialIcon openIcon={<Icon>{MaterialUIIcons.edit}</Icon>}/>}
            >
                {actions.map((action) => (
                        <SpeedDialAction
                                onClick={() => {
                                    router.push(action.link);
                                }}
                                key={action.name}
                                icon={<Icon>{action.icon}</Icon>}
                                tooltipTitle={action.name}
                        />
                ))}
            </SpeedDial>
    );
}