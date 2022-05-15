import {gql} from "@apollo/client";

export const visionsOverviewQuery = gql`
    query Visions($where: VisionWhereInput) {
        visions(where: $where) {
            id
            title
            activityDate
            thumbnail
            author {
                id
                name
                email
                image
            }
            description
            createdAt
            premiseId
            authorId
            prevVisionId
        }
    }`;