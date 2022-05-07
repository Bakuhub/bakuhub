import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTagsOnVisionsArgs } from "./args/DeleteManyTagsOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTagsOnVisionsResolver {
    deleteManyTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsOnVisionsArgs): Promise<AffectedRowsOutput>;
}
