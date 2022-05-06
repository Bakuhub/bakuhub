import { GraphQLResolveInfo } from "graphql";
import { DeleteManySubscriptionsOnTimelinesArgs } from "./args/DeleteManySubscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySubscriptionsOnTimelinesResolver {
    deleteManySubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
