import { GraphQLResolveInfo } from "graphql";
import { DeleteSubscriptionsOnPremisesArgs } from "./args/DeleteSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class DeleteSubscriptionsOnPremisesResolver {
    deleteSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null>;
}
