import { GraphQLResolveInfo } from "graphql";
import { AggregatePremisesOnTimelinesArgs } from "./args/AggregatePremisesOnTimelinesArgs";
import { AggregatePremisesOnTimelines } from "../../outputs/AggregatePremisesOnTimelines";
export declare class AggregatePremisesOnTimelinesResolver {
    aggregatePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregatePremisesOnTimelinesArgs): Promise<AggregatePremisesOnTimelines>;
}
