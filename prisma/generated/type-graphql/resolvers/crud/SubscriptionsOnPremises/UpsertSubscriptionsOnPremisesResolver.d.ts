import { GraphQLResolveInfo } from "graphql";
import { UpsertSubscriptionsOnPremisesArgs } from "./args/UpsertSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class UpsertSubscriptionsOnPremisesResolver {
    upsertSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpsertSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises>;
}
