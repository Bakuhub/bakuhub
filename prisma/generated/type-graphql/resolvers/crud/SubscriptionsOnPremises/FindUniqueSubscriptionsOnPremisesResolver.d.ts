import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSubscriptionsOnPremisesArgs } from "./args/FindUniqueSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class FindUniqueSubscriptionsOnPremisesResolver {
    findUniqueSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null>;
}
