import {ListItem, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {SubscriptionsOnPremises} from "prisma/generated/type-graphql";
import * as React from "react";
import {FunctionComponent} from "react";
import moment from "moment";
import {useMutation} from "@apollo/client";
import {createUpdateSubscriptionStatusMutation} from "@gql/mutation/createUpdateSubscriptionStatusMutation";
import {getUpdateSubscriptionStatusVariables} from "@gql/utils/getUpdateSubscriptionStatusVariables";

interface UserSubscriptionItemProps {
    subscription: SubscriptionsOnPremises;
    userId: string;
}

export const UserSubscriptionItem: FunctionComponent<UserSubscriptionItemProps> = ({subscription, userId}) => {
    const [updateSubscriptionStatus] = useMutation(createUpdateSubscriptionStatusMutation);
    const [isActive, setIsActive] = React.useState(() => subscription.status === "ACTIVE");
    const updateSubscription = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        updateSubscriptionStatus(
                getUpdateSubscriptionStatusVariables({
                                                         status: checked ? "ACTIVE":"INACTIVE",
                                                         userId, premiseId: subscription.premiseId
                                                     })
        ).then(
                res => {
                    console.log(res);
                    setIsActive(checked);
                }
        );
    };
    return (
            <ListItem>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={
                    subscription.premise?.title
                }
                              secondary={
                                  `last updated at ${moment(subscription.updatedAt).fromNow()}`
                              }/>
                <Switch
                        edge="end"
                        onChange={updateSubscription}
                        checked={isActive}
                />
            </ListItem>
    );
};

export default UserSubscriptionItem;