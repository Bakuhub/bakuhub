import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnTimelinesArgs } from "./args/AggregateTagsOnTimelinesArgs";
import { AggregateTagsOnTimelines } from "../../outputs/AggregateTagsOnTimelines";
export declare class AggregateTagsOnTimelinesResolver {
    aggregateTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsOnTimelinesArgs): Promise<AggregateTagsOnTimelines>;
}
