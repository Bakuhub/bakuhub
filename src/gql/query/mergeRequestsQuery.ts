import {gql} from "@apollo/client";
import gqlTemplate from "@gql/constants";

export const getMergeRequestsQuery = () => {

    return gql`
        query MergeRequests($where: MergeRequestWhereInput,$orderBy: [MergeRequestOrderByWithRelationInput!]) {
            mergeRequests(where: $where,orderBy: $orderBy) {
                title
                vision {
                    createdAt
                    author {
                        ${gqlTemplate.user.avatar}
                    }
                }
                description
                status
            }
        }
    `;
};