import {gql} from "@apollo/client";

export const createMergeRequestMutation = gql`
    mutation CreateMergeRequest($data: MergeRequestCreateInput!) {
        createMergeRequest(data: $data) {
            id
        }
    }
`;