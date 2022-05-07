import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnVisionsArgs } from "./args/AggregateTagsOnVisionsArgs";
import { AggregateTagsOnVisions } from "../../outputs/AggregateTagsOnVisions";
export declare class AggregateTagsOnVisionsResolver {
    aggregateTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsOnVisionsArgs): Promise<AggregateTagsOnVisions>;
}
