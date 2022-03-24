import {gql} from "@apollo/client";

export const createVisionMutation = gql`
    mutation Mutation($data: VisionCreateInput!) {
        createVision(data: $data) {
            prevVision {
                id
            }
            id
            title
            description
            
        }
    }
`;
