import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTimelineArgs } from "./args/DeleteManyTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTimelineResolver {
    deleteManyTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTimelineArgs): Promise<AffectedRowsOutput>;
}
