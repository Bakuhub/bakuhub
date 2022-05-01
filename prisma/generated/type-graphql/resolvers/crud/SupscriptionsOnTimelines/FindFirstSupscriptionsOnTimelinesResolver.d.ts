import { GraphQLResolveInfo } from "graphql";
import { FindFirstSupscriptionsOnTimelinesArgs } from "./args/FindFirstSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class FindFirstSupscriptionsOnTimelinesResolver {
    findFirstSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines | null>;
}
