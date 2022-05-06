import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnPremiseArgs } from "./args/AggregateThreadsOnPremiseArgs";
import { AggregateThreadsOnPremise } from "../../outputs/AggregateThreadsOnPremise";
export declare class AggregateThreadsOnPremiseResolver {
    aggregateThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: AggregateThreadsOnPremiseArgs): Promise<AggregateThreadsOnPremise>;
}
