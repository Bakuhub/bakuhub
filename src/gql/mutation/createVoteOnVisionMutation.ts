import {gql} from "@apollo/client";

export const createVoteOnVisionMutation = gql`
    mutation Mutation($where: VotesOnVisionWhereUniqueInput!, $create: VotesOnVisionCreateInput!, $update: VotesOnVisionUpdateInput!) {
        upsertVotesOnVision(where: $where, create: $create, update: $update) {
            vote
        }
    }
`;