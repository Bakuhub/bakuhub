import { GraphQLResolveInfo } from "graphql";
import { UpdateSubscriptionsOnTimelinesArgs } from "./args/UpdateSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class UpdateSubscriptionsOnTimelinesResolver {
    updateSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null>;
}
