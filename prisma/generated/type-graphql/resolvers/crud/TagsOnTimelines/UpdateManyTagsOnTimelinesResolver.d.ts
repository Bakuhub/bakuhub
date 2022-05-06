import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTagsOnTimelinesArgs } from "./args/UpdateManyTagsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTagsOnTimelinesResolver {
    updateManyTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
