import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTagsOnTimelinesArgs } from "./args/DeleteManyTagsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTagsOnTimelinesResolver {
    deleteManyTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
