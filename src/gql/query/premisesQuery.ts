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
                reference {
                    snapshots{
                        sourceUrl
                    }
                }
                createdAt
                thumbnail
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