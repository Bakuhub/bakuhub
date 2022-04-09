import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import TimelineIcon from "@mui/icons-material/Timeline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {useRouter} from "next/router";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const actions = [
    {icon: <TimelineIcon/>, name: "TimeLine", link: "/create/timeline"},
    {icon: <PostAddIcon/>, name: "Premise", link: "/create/premise"},
    {icon: <AddAPhotoIcon/>, name: "Snapshot", link: "/create/snapshot"},
];

export default function SpeedDialContainer() {
    const router = useRouter();
    return (
            <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{position: "fixed", bottom: 16, right: 16}}
                    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
            >
                {actions.map((action) => (
                        <SpeedDialAction
                                onClick={() => {
                                    router.push(action.link);
                                }}
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                        />
                ))}
            </SpeedDial>
    );
}