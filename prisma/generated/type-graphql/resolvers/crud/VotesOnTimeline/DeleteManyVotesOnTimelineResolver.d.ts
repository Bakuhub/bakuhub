import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVotesOnTimelineArgs } from "./args/DeleteManyVotesOnTimelineArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVotesOnTimelineResolver {
    deleteManyVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVotesOnTimelineArgs): Promise<AffectedRowsOutput>;
}
