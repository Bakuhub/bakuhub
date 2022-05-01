import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSupscriptionsOnTimelinesArgs } from "./args/FindUniqueSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class FindUniqueSupscriptionsOnTimelinesResolver {
    findUniqueSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines | null>;
}
