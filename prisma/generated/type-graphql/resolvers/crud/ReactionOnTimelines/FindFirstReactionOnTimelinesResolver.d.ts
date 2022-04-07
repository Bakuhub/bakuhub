import { GraphQLResolveInfo } from "graphql";
import { FindFirstReactionOnTimelinesArgs } from "./args/FindFirstReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class FindFirstReactionOnTimelinesResolver {
    findFirstReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
}
