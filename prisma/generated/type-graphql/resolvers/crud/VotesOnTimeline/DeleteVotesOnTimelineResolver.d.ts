import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnTimelineArgs } from "./args/DeleteVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
export declare class DeleteVotesOnTimelineResolver {
    deleteVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: DeleteVotesOnTimelineArgs): Promise<VotesOnTimeline | null>;
}
