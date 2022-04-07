import { GraphQLResolveInfo } from "graphql";
import { CreateManyReactionOnTimelinesArgs } from "./args/CreateManyReactionOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReactionOnTimelinesResolver {
    createManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
