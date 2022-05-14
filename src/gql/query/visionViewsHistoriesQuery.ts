import {gql} from "@apollo/client";

export const visionViewsHistoriesQuery = gql`
    query VisionViewsHistory($where: VisionViewsHistoryWhereInput, $orderBy: [VisionViewsHistoryOrderByWithRelationInput!]) {
        visionViewsHistories(where: $where, orderBy: $orderBy) {
            visionId
            createdAt
            vision {
                id
                author {
                    image
                    email
                    id
                    name
                }
                title
                activityDate
                description
                updatedAt
                thumbnail
            }
        }
    }
`;