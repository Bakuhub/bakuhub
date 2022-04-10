import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnThreadArgs } from "./args/UpsertVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class UpsertVotesOnThreadResolver {
    upsertVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: UpsertVotesOnThreadArgs): Promise<VotesOnThread>;
}
