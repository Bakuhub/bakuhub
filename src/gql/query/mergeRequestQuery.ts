import {gql} from "@apollo/client";

export const mergeRequestQuery = gql`
    query MergeRequest($where: MergeRequestWhereUniqueInput!) {
        mergeRequest(where: $where) {
            vision {
                id
                title
                activityDate
                description
                reference
                createdAt
                thumbnail
                prevVision {
                    title
                    activityDate
                    id
                    description
                    createdAt
                    reference
                    thumbnail
                    draftMode
                }
            }
            title
            description
            id
        }
    }
`;