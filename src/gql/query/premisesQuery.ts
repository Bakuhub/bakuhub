import {gql} from "@apollo/client";

export const premisesQuery = gql`
    query Premises($where: VisionWhereInput) {
        premises {
            id
            vision(where: $where) {
                title
                description
                activityDate
                id
                createdAt
                reference
                thumbnail
                draftMode
                author {
                    id
                    image
                    email
                    name
                }
            }

        }
    }
`;