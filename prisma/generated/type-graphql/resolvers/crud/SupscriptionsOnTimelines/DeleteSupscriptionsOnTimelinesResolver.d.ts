import { GraphQLResolveInfo } from "graphql";
import { DeleteSupscriptionsOnTimelinesArgs } from "./args/DeleteSupscriptionsOnTimelinesArgs";
import { SupscriptionsOnTimelines } from "../../../models/SupscriptionsOnTimelines";
export declare class DeleteSupscriptionsOnTimelinesResolver {
    deleteSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteSupscriptionsOnTimelinesArgs): Promise<SupscriptionsOnTimelines | null>;
}
