import {gql} from "@apollo/client";

export const upsertReactionOnThreadsMutation = gql`
    mutation UpsertReactionOnThreads($where: ReactionOnThreadsWhereUniqueInput!, $create: ReactionOnThreadsCreateInput!, $update: ReactionOnThreadsUpdateInput!) {
        upsertReactionOnThreads(where: $where, create: $create, update: $update) {
            userId
            threadId
            reaction
        }
    }
`;