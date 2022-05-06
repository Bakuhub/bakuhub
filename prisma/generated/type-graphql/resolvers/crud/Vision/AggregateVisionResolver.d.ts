import { GraphQLResolveInfo } from "graphql";
import { AggregateVisionArgs } from "./args/AggregateVisionArgs";
import { AggregateVision } from "../../outputs/AggregateVision";
export declare class AggregateVisionResolver {
    aggregateVision(ctx: any, info: GraphQLResolveInfo, args: AggregateVisionArgs): Promise<AggregateVision>;
}
