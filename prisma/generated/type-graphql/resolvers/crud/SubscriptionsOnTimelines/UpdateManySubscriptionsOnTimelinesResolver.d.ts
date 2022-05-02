import { GraphQLResolveInfo } from "graphql";
import { UpdateManySubscriptionsOnTimelinesArgs } from "./args/UpdateManySubscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySubscriptionsOnTimelinesResolver {
    updateManySubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
