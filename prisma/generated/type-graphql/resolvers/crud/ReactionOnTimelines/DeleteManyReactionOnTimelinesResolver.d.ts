import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReactionOnTimelinesArgs } from "./args/DeleteManyReactionOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReactionOnTimelinesResolver {
    deleteManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
