import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThreadsOnTimelineArgs } from "./args/UpdateManyThreadsOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThreadsOnTimelineResolver {
    updateManyThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput>;
}
