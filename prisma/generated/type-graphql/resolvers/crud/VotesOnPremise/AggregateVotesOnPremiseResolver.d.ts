import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnPremiseArgs } from "./args/AggregateVotesOnPremiseArgs";
import { AggregateVotesOnPremise } from "../../outputs/AggregateVotesOnPremise";
export declare class AggregateVotesOnPremiseResolver {
    aggregateVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: AggregateVotesOnPremiseArgs): Promise<AggregateVotesOnPremise>;
}
