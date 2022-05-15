import Avatar from "@mui/material/Avatar";
import {getUserAvatar} from "../../../utils/getUserAvatar";
import * as React from "react";
import {FunctionComponent} from "react";
import Link from "next/link";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

export interface UserAvatarProps {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    size?: "small" | "medium" | "large" | "xlarge";
    sx?: SxProps<Theme>;
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = (props) => {
    const getStyle = () => {
        const defaultStyle = {
            cursor: "pointer",
            ...(
                    props.sx || {}
            )
        };
        if (props.size === "small") {
            return {
                ...defaultStyle,
                width: "24px",
                height: "24px",
                margin: ".5rem"
            };
        }
        return defaultStyle;
    };
    return <Link
            passHref
            href="/user/profile"
    >
        <Avatar
                {...getUserAvatar(props || undefined)}
                sx={getStyle()}
                aria-label="user avatar"
        />
    </Link>;
};