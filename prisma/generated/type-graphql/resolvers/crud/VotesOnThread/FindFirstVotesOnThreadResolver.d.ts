import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnThreadArgs } from "./args/FindFirstVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class FindFirstVotesOnThreadResolver {
    findFirstVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: FindFirstVotesOnThreadArgs): Promise<VotesOnThread | null>;
}
