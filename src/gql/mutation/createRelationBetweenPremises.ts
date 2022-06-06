import {gql} from "@apollo/client";

export const createRelationBetweenPremises = gql`
    mutation Mutation($data: RelationBetweenPremisesCreateInput!) {
        createRelationBetweenPremises(data: $data) {
            id
        }
    }
`;