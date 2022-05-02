import { GraphQLResolveInfo } from "graphql";
import { UpsertSubscriptionsOnTimelinesArgs } from "./args/UpsertSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class UpsertSubscriptionsOnTimelinesResolver {
    upsertSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines>;
}
