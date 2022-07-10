import {gql} from "@apollo/client";

export const premiseIdsQuery = gql`
    query Query($where: VisionWhereInput) {
        visions(where: $where) {
            title
            id
            description
            premise {
                id
            }
        }
    }
`;