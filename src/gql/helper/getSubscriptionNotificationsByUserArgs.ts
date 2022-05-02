import {gql} from "@apollo/client";
import {DocumentNode} from "graphql";

export const subscriptionNotificationsByUserQuery = gql`
    query Query($where: SubscriptionsOnPremisesWhereInput) {
        notifications: aggregateSubscriptionsOnPremises(where: $where) {
            _count {
                _all
            }
        }
    }
`;

export const getSubscriptionNotificationsByUserArgs = (userId: string): [DocumentNode, { variables: { where: { AND: { hasUnreadNotifications: { equals: boolean }; userId: { equals: string } }[] } } }] => [
    subscriptionNotificationsByUserQuery,
    {
        variables: {
            where: {
                AND: [
                    {
                        userId: {
                            equals: userId
                        },
                        hasUnreadNotifications: {
                            equals: true
                        }
                    }
                ]
            }
        }
    }
];

