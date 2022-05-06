import { GraphQLResolveInfo } from "graphql";
import { CreateManyVotesOnTimelineArgs } from "./args/CreateManyVotesOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVotesOnTimelineResolver {
    createManyVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: CreateManyVotesOnTimelineArgs): Promise<AffectedRowsOutput>;
}
