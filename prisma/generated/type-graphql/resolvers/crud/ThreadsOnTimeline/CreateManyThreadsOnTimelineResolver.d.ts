import { GraphQLResolveInfo } from "graphql";
import { CreateManyThreadsOnTimelineArgs } from "./args/CreateManyThreadsOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThreadsOnTimelineResolver {
    createManyThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput>;
}
