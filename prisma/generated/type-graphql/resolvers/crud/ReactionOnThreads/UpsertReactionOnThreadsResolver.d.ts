import { GraphQLResolveInfo } from "graphql";
import { UpsertReactionOnThreadsArgs } from "./args/UpsertReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class UpsertReactionOnThreadsResolver {
    upsertReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionOnThreadsArgs): Promise<ReactionOnThreads>;
}
