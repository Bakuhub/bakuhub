import { GraphQLResolveInfo } from "graphql";
import { CreateSubscriptionsOnPremisesArgs } from "./args/CreateSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
export declare class CreateSubscriptionsOnPremisesResolver {
    createSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises>;
}
