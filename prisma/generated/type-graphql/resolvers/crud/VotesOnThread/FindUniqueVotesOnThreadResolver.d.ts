import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnThreadArgs } from "./args/FindUniqueVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class FindUniqueVotesOnThreadResolver {
    votesOnThread(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVotesOnThreadArgs): Promise<VotesOnThread | null>;
}
