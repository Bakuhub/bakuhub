import { GraphQLResolveInfo } from "graphql";
import { FindManyVotesOnThreadArgs } from "./args/FindManyVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class FindManyVotesOnThreadResolver {
    votesOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindManyVotesOnThreadArgs): Promise<VotesOnThread[]>;
}
