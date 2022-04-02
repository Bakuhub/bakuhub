import {gql} from "@apollo/client";

export const visionHistoryCountQuery = gql`
    query Query($where: VisionWhereInput) {
        visions(where: $where) {
            id
        }
    }
`;
