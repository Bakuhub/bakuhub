import { GraphQLResolveInfo } from "graphql";
import { FindManySubscriptionsOnPremisesArgs } from "./args/FindManySubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class FindManySubscriptionsOnPremisesResolver {
    findManySubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManySubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises[]>;
}
