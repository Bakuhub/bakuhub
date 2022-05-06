import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnVisionArgs } from "./args/AggregateThreadsOnVisionArgs";
import { AggregateThreadsOnVision } from "../../outputs/AggregateThreadsOnVision";
export declare class AggregateThreadsOnVisionResolver {
    aggregateThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: AggregateThreadsOnVisionArgs): Promise<AggregateThreadsOnVision>;
}
