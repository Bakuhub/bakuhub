import {gql} from "@apollo/client";

export const createVisionViewsHistoryMutation = gql`

    mutation CreateVisionViewsHistory($data: VisionViewsHistoryCreateInput!) {
        createVisionViewsHistory(data: $data) {
            userId
            visionId
            createdAt
        }
    }

`;