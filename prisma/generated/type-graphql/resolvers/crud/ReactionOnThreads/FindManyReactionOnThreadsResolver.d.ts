import { GraphQLResolveInfo } from "graphql";
import { FindManyReactionOnThreadsArgs } from "./args/FindManyReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class FindManyReactionOnThreadsResolver {
    findManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionOnThreadsArgs): Promise<ReactionOnThreads[]>;
}
