import { GraphQLResolveInfo } from "graphql";
import { CreateSupscriptionsOnTimelinesArgs } from "./args/CreateSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class CreateSupscriptionsOnTimelinesResolver {
    createSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines>;
}
