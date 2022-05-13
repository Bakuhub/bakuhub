import {gql} from "@apollo/client";

export const getMergeRequestsQuery = () => {

    return gql`
        query MergeRequests($where: MergeRequestWhereInput) {
            mergeRequests(where: $where) {
                title
                description
                status
            }
        }
    `;
};