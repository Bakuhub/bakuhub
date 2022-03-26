import {gql} from "@apollo/client";

export const premiseQuery = gql`
    query Query($where: PremiseWhereUniqueInput!, $visionWhere2: VisionWhereInput) {
        premise(where: $where) {
            title
            id
            createdAt
            updatedAt
            status
            author {
                name
                image
                email
            }
            vision(where: $visionWhere2) {
                id
                title
                activityDate
                description
                createdAt
                reference
                authorId
                prevVisionId
                draftMode
                mergeRequest {
                    id
                }
                nextVision {
                    id
                    title
                    activityDate
                    description
                    createdAt
                    reference
                    draftMode
                }
            }
        }
    }

`;