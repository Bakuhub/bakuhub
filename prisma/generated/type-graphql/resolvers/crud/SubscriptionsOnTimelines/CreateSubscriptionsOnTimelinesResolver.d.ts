import { GraphQLResolveInfo } from "graphql";
import { CreateSubscriptionsOnTimelinesArgs } from "./args/CreateSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class CreateSubscriptionsOnTimelinesResolver {
    createSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines>;
}
