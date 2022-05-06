import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVotesOnTimelineArgs } from "./args/UpdateManyVotesOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVotesOnTimelineResolver {
    updateManyVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVotesOnTimelineArgs): Promise<AffectedRowsOutput>;
}
