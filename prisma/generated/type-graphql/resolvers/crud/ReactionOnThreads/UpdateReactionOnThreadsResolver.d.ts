import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionOnThreadsArgs } from "./args/UpdateReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class UpdateReactionOnThreadsResolver {
    updateReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
}
