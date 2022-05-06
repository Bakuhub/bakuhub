import { GraphQLResolveInfo } from "graphql";
import { CreateManyTagsOnTimelinesArgs } from "./args/CreateManyTagsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTagsOnTimelinesResolver {
    createManyTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
