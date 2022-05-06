import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnVisionArgs } from "./args/AggregateVotesOnVisionArgs";
import { AggregateVotesOnVision } from "../../outputs/AggregateVotesOnVision";
export declare class AggregateVotesOnVisionResolver {
    aggregateVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: AggregateVotesOnVisionArgs): Promise<AggregateVotesOnVision>;
}
