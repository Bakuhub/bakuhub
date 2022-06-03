import {gql} from "@apollo/client";

export const aggregateRelationBetweenVisionsQuery = gql`
    query _count($where: RelationBetweenVisionsWhereInput) {
        aggregateRelationBetweenVisions(where: $where) {
            _count {
                _all
            }
        }
    }
`;