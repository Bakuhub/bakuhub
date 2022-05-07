import {gql} from "@apollo/client";

export const tagQuery = gql`
    query Query($where: TagWhereInput) {
        tags(where: $where) {
            label
            _count {
                tagsOnPremises
                tagsOnVisions
                tagsOnTimelines
            }
        }
    }`;