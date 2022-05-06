import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReactionOnThreadsArgs } from "./args/DeleteManyReactionOnThreadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReactionOnThreadsResolver {
    deleteManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
}
