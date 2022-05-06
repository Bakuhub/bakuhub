import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnVisionsArgs } from "./args/AggregateReactionOnVisionsArgs";
import { AggregateReactionOnVisions } from "../../outputs/AggregateReactionOnVisions";
export declare class AggregateReactionOnVisionsResolver {
    aggregateReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionOnVisionsArgs): Promise<AggregateReactionOnVisions>;
}
