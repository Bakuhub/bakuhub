import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionOnThreadsArgs } from "./args/DeleteReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class DeleteReactionOnThreadsResolver {
    deleteReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
}
