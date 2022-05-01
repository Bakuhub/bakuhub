import { GraphQLResolveInfo } from "graphql";
import { UpdateManySupscriptionsOnTimelinesArgs } from "./args/UpdateManySupscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySupscriptionsOnTimelinesResolver {
    updateManySupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManySupscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
