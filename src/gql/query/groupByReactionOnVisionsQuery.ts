import {gql} from "@apollo/client";

export const groupByReactionOnVisionsQuery = gql`
    query FindManyReactionOnVisions($by: [ReactionOnVisionsScalarFieldEnum!]!, $where: ReactionOnVisionsWhereInput) {
        groupByReactionOnVisions(by: $by, where: $where) {
            reaction
            _count {
                _all
            }
        }
    }
`;
