import { GraphQLResolveInfo } from "graphql";
import { FindManySubscriptionsOnTimelinesArgs } from "./args/FindManySubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
export declare class FindManySubscriptionsOnTimelinesResolver {
    findManySubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManySubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines[]>;
}
