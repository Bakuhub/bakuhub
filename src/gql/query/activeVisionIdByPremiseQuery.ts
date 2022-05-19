import {gql} from "@apollo/client";

export const activeVisionIdByPremiseQuery = gql`
    query Query($where: PremiseWhereUniqueInput!, $visionWhere2: VisionWhereInput) {
        premise(where: $where) {
            vision(where: $visionWhere2) {
                id
            }
        }
    }
`;