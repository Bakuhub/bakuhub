import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTimelineArgs } from "./args/UpdateManyTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTimelineResolver {
    updateManyTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTimelineArgs): Promise<AffectedRowsOutput>;
}
