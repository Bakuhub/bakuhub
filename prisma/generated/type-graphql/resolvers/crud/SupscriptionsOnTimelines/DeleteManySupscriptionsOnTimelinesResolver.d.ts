import { GraphQLResolveInfo } from "graphql";
import { DeleteManySupscriptionsOnTimelinesArgs } from "./args/DeleteManySupscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySupscriptionsOnTimelinesResolver {
    deleteManySupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManySupscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
