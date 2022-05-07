import {gql} from "@apollo/client";

export const userQuery = gql`
    query User($where: UserWhereUniqueInput!) {
        user(where: $where) {
            name
            email
            image
            _count {
                premises
                threads
                visions
                timelines
                subscriptionsOnPremises
                subscriptionsOnTimelines
            }
        }
    }`;

