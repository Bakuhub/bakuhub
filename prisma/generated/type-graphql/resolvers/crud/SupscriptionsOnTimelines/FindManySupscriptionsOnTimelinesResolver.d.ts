import { GraphQLResolveInfo } from "graphql";
import { FindManySupscriptionsOnTimelinesArgs } from "./args/FindManySupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class FindManySupscriptionsOnTimelinesResolver {
    findManySupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManySupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines[]>;
}
