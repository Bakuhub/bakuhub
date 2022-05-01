import { GraphQLResolveInfo } from "graphql";
import { UpdateSupscriptionsOnTimelinesArgs } from "./args/UpdateSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class UpdateSupscriptionsOnTimelinesResolver {
    updateSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines | null>;
}
