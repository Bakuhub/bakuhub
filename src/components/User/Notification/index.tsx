import Icon from "@mui/material/Icon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import * as React from "react";
import {useSession} from "next-auth/react";
import {Badge} from "@mui/material";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {getSubscriptionNotificationsByUserArgs} from "../../../gql/helper/getSubscriptionNotificationsByUserArgs";
import {useQuery} from "@apollo/client";
import get from "lodash/get";

export const UserNotification = () => {
    const session = useSession();
    const userId = getUserIdBySession(session);
    const {data, loading, error} = useQuery(...getSubscriptionNotificationsByUserArgs(userId));
    return <Badge badgeContent={get(data, "notifications._count._all")} color="primary">
        <Icon component={NotificationsNoneIcon}/>
    </Badge>;

};