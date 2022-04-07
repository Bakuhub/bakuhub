import { GraphQLResolveInfo } from "graphql";
import { AggregatePremiseArgs } from "./args/AggregatePremiseArgs";
import { AggregatePremise } from "../../outputs/AggregatePremise";
export declare class AggregatePremiseResolver {
    aggregatePremise(ctx: any, info: GraphQLResolveInfo, args: AggregatePremiseArgs): Promise<AggregatePremise>;
}
