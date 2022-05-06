import { GraphQLResolveInfo } from "graphql";
import { DeleteSubscriptionsOnTimelinesArgs } from "./args/DeleteSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class DeleteSubscriptionsOnTimelinesResolver {
    deleteSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null>;
}
