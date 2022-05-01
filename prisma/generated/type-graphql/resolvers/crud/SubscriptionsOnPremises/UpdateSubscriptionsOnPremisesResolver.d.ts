import { GraphQLResolveInfo } from "graphql";
import { UpdateSubscriptionsOnPremisesArgs } from "./args/UpdateSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class UpdateSubscriptionsOnPremisesResolver {
    updateSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null>;
}
