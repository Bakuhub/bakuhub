import { GraphQLResolveInfo } from "graphql";
import { FindFirstSubscriptionsOnPremisesArgs } from "./args/FindFirstSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class FindFirstSubscriptionsOnPremisesResolver {
    findFirstSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindFirstSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null>;
}
