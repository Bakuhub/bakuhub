import { GraphQLResolveInfo } from "graphql";
import { FindManyReactionOnTimelinesArgs } from "./args/FindManyReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
export declare class FindManyReactionOnTimelinesResolver {
    findManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]>;
}
