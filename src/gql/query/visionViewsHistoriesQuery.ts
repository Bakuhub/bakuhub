import {gql} from "@apollo/client";

export const visionViewsHistoriesQuery = gql`
    query VisionViewsHistory($where: VisionViewsHistoryWhereInput) {
        visionViewsHistories(where: $where) {
            visionId
            vision {
                id
                title
                activityDate
                description
                updatedAt
                thumbnail
            }
        }
    }
`;