import Avatar from "@mui/material/Avatar";
import {getUserAvatar} from "../../../utils/getUserAvatar";
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
            sx={{width: 24, height: 24, margin: "0.5rem"}}
            aria-label="user avatar"
    />;
};