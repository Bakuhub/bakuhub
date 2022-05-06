import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReactionOnThreadsArgs } from "./args/UpdateManyReactionOnThreadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReactionOnThreadsResolver {
    updateManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
}
