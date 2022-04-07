import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionOnThreadsArgs } from "./args/FindUniqueReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class FindUniqueReactionOnThreadsResolver {
    findUniqueReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
}
