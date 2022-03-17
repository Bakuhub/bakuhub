import {gql} from "@apollo/client";

export const premisesQuery = gql`
    query Premise($take: Int, $where: VisionWhereInput) {
        premises(take: $take) {
            title
            updatedAt
            status
            author {
                name
            }
            vision(where: $where) {
                description
                createdAt
                reference
                authorId
                activityDate
                title
                id
                nextVision {
                    title
                    activityDate
                    description
                    createdAt
                    reference
                    authorId
                    nextVision {
                        title
                    }
                }
            }
        }
    }
`;