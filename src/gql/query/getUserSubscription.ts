import {gql} from "@apollo/client";

export const getUserSubscription = () => {

    return gql`
        query User($where: UserWhereUniqueInput!) {
            user(where: $where) {
                subscriptionsOnTimelines {
                    lastReadAt
                    timeline {
                        id
                    }
                }
                subscriptionsOnPremises {
                    lastReadAt
                    premise {
                        updatedAt
                    }
                }
            }
        }`;
};