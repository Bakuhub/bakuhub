import { GraphQLResolveInfo } from "graphql";
import { FindFirstReactionOnThreadsArgs } from "./args/FindFirstReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class FindFirstReactionOnThreadsResolver {
    findFirstReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
}
