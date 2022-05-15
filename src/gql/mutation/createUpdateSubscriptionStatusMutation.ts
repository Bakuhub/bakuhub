import {gql} from "@apollo/client";

export const createUpdateSubscriptionStatusMutation = gql`
    mutation UpdateSubscriptionsOnPremises($data: SubscriptionsOnPremisesUpdateInput!, $where: SubscriptionsOnPremisesWhereUniqueInput!) {
        updateSubscriptionsOnPremises(data: $data, where: $where) {
            status
        }
    }
`;
