import {gql} from "@apollo/client";

export const createVisionMutation = gql`
    mutation CreateVision($data: VisionCreateInput!) {
        createVision(data: $data) {
            id
        }
    }
`;
