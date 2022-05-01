import { GraphQLResolveInfo } from "graphql";
import { UpsertSupscriptionsOnTimelinesArgs } from "./args/UpsertSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class UpsertSupscriptionsOnTimelinesResolver {
    upsertSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines>;
}
