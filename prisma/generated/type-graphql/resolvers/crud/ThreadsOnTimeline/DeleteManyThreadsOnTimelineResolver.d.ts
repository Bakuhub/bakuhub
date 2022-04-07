import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThreadsOnTimelineArgs } from "./args/DeleteManyThreadsOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThreadsOnTimelineResolver {
    deleteManyThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput>;
}
