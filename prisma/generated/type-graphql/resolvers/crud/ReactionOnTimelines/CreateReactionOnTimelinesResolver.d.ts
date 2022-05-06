import { GraphQLResolveInfo } from "graphql";
import { CreateReactionOnTimelinesArgs } from "./args/CreateReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class CreateReactionOnTimelinesResolver {
    createReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateReactionOnTimelinesArgs): Promise<ReactionOnTimelines>;
}
