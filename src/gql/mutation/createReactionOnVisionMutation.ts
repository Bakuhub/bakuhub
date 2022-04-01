import {gql} from "@apollo/client";

export const createReactionOnVisionMutation = gql`
    mutation CreateReactionOnVision($data: ReactionOnVisionCreateInput!) {
        createReactionOnVision(data: $data) {
            userId
            visionId
            reaction
        }
    }
`;