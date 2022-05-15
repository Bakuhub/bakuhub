import {gql} from "@apollo/client";

export const findManySubscriptionsOnPremisesQuery = gql`
    query FindManySubscriptionsOnPremises($take: Int, $skip: Int, $orderBy: [SubscriptionsOnPremisesOrderByWithRelationInput!], $where: SubscriptionsOnPremisesWhereInput) {
        findManySubscriptionsOnPremises(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
            premiseId
            hasUnreadNotifications
            lastReadAt
            updatedAt
            status
            type
            premise{
                title
            }
        }
    }
`;