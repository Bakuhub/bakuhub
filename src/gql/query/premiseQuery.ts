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
                role
            }
            vision(where: $visionWhere2) {
                title
                activityDate
                description
                createdAt
                reference
                authorId
                nextVision {
                    title
                    activityDate
                    description
                    createdAt
                    reference
                }
            }
        }
    }

`;