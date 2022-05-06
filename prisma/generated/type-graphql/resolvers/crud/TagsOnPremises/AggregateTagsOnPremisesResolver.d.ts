import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnPremisesArgs } from "./args/AggregateTagsOnPremisesArgs";
import { AggregateTagsOnPremises } from "../../outputs/AggregateTagsOnPremises";
export declare class AggregateTagsOnPremisesResolver {
    aggregateTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsOnPremisesArgs): Promise<AggregateTagsOnPremises>;
}
