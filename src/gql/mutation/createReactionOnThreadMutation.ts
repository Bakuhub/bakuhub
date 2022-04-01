import {gql} from "@apollo/client";

export const createReactionOnThreadMutation = gql`
    mutation CreateReactionOnThread($data: ReactionOnThreadCreateInput!) {
        createReactionOnThread(data: $data) {
            userId
            threadId
            reaction
        }
    }
`;