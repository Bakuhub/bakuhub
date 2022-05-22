import {useQuery} from "@apollo/client";
import {
    findManySubscriptionsOnPremisesQuery
} from "@gql/query/findManySubscriptionsOnPremisesQuery";
import {
    getFindManySubscriptionsOnPremisesVariables
} from "@gql/utils/getFindManySubscriptionsOnPremisesVariables";
import {useSession} from "next-auth/react";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {SubscriptionsOnPremises} from "../../../../prisma/generated/type-graphql";
import UserSubscriptionItem from "@components/User/UserSubscriptions/UserSubscriptionItem";

export const UserSubscriptions = () => {

    const session = useSession();
    const userId = getUserIdBySession(session);
    const {
        data
    } = useQuery(
            findManySubscriptionsOnPremisesQuery,
            getFindManySubscriptionsOnPremisesVariables({userId})
    );
    const subscriptions: SubscriptionsOnPremises[] = data?.findManySubscriptionsOnPremises;
    return (
            <div>
                {
                    subscriptions?.map(
                            subscription => <UserSubscriptionItem userId={userId}
                                                                  subscription={subscription} key={
                                subscription.premiseId
                            }/>
                    )
                }
            </div>
    );
};

export default UserSubscriptions;