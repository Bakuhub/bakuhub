import {gql} from "@apollo/client";

export const upsertReactionOnVisionsMutation = gql`
    mutation UpsertReactionOnVisions($where: ReactionOnVisionsWhereUniqueInput!, $create: ReactionOnVisionsCreateInput!, $update: ReactionOnVisionsUpdateInput!) {
        upsertReactionOnVisions(where: $where, create: $create, update: $update) {
            userId
            visionId
            reaction
            createdAt
        }
    }
`;