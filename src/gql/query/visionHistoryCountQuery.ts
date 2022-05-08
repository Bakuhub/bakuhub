import {gql} from "@apollo/client";

export const visionHistoryCountQuery = gql`
    query Visions($where: VisionWhereInput, $orderBy: [VisionOrderByWithRelationInput!]) {
        visions(where: $where, orderBy: $orderBy) {
            id
        }
    }
`;
