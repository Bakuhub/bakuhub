import Avatar from "@mui/material/Avatar";
import {getUserAvatar} from "../../../utils/getUserAvatar";
import * as React from "react";
import {FunctionComponent} from "react";

export interface UserAvatarProps {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    size?: "small" | "medium" | "large" | "xlarge";
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = (props) => {
    return <Avatar
            {...getUserAvatar(props || undefined)}
            sx={props.size === "small" ? {width: 24, height: 24, margin: "0.5rem"}:{}}
            aria-label="user avatar"
    />;
};