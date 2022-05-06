import { GraphQLResolveInfo } from "graphql";
import { CreateManyTimelineArgs } from "./args/CreateManyTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTimelineResolver {
    createManyTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateManyTimelineArgs): Promise<AffectedRowsOutput>;
}
