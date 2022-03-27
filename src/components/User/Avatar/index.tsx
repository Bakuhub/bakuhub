import Avatar from "@mui/material/Avatar";
import {getUserAvatar} from "../../../utils/getUserAvatar";
import {red} from "@mui/material/colors";
import * as React from "react";
import {FunctionalComponent} from "preact";

export interface UserAvatarProps {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}

export const UserAvatar: FunctionalComponent<UserAvatarProps> = (props) => {
    return <Avatar
            {...getUserAvatar(props || undefined)}
            sx={{bgcolor: red[500]}}
            aria-label="user avatar"
    />;
};