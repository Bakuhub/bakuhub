import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionOnTimelinesArgs } from "./args/FindUniqueReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class FindUniqueReactionOnTimelinesResolver {
    findUniqueReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
}
