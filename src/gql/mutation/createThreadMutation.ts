import {gql} from "@apollo/client";

export const createThreadMutation = gql`
    mutation CreateThread($data: ThreadCreateInput!) {
        createThread(data: $data) {
            title
            activityDate
            description
        }
    }
`;