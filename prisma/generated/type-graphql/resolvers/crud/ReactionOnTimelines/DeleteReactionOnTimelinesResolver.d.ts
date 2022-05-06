import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionOnTimelinesArgs } from "./args/DeleteReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class DeleteReactionOnTimelinesResolver {
    deleteReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
}
