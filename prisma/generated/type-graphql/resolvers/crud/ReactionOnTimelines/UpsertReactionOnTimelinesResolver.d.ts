import { GraphQLResolveInfo } from "graphql";
import { UpsertReactionOnTimelinesArgs } from "./args/UpsertReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class UpsertReactionOnTimelinesResolver {
    upsertReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionOnTimelinesArgs): Promise<ReactionOnTimelines>;
}
