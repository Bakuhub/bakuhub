import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionOnTimelinesArgs } from "./args/UpdateReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class UpdateReactionOnTimelinesResolver {
    updateReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
}
