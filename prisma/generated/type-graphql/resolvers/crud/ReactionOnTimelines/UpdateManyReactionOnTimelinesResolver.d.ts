import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReactionOnTimelinesArgs } from "./args/UpdateManyReactionOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReactionOnTimelinesResolver {
    updateManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
