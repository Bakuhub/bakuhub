import {SubscriptionsOnPremises, SubscriptionsOnTimelines} from "prisma/generated/type-graphql";
import {FunctionComponent} from "react";
import {Grid, Typography} from "@mui/material";

interface SubscriptionListItemProps {
    subscription: SubscriptionsOnPremises | SubscriptionsOnTimelines;

}

export const SubscriptionListItem: FunctionComponent<SubscriptionListItemProps> = ({
                                                                                       subscription
                                                                                   }) => {

    return <Grid item container>
        <Typography variant={"subtitle1"}>
            {`{subscription.hasUnreadNotifications}
            {subscription.lastReadAt}
            {subscription.updatedAt}`}
        </Typography>
    </Grid>;
};