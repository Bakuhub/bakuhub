import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTagsOnVisionsArgs } from "./args/UpdateManyTagsOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTagsOnVisionsResolver {
    updateManyTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsOnVisionsArgs): Promise<AffectedRowsOutput>;
}
