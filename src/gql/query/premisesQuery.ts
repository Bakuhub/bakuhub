import {gql} from "@apollo/client";

export const premisesQuery = gql`
    query Premises($where: VisionWhereInput) {
        premises {
            id
            vision(where: $where) {
                title
                activityDate
                id
                createdAt
                reference
                thumbnail
                draftMode
            }
        }
    }
`;