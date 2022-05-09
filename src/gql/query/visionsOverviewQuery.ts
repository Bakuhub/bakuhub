import {gql} from "@apollo/client";

export const visionsOverviewQuery = gql`
    query Visions($where: VisionWhereInput) {
        visions(where: $where) {
            id
            title
            activityDate
            description
            createdAt
            premiseId
            authorId
            prevVisionId
        }
    }`;