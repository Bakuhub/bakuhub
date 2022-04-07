import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReferenceArgs } from "./args/DeleteManyReferenceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReferenceResolver {
    deleteManyReference(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReferenceArgs): Promise<AffectedRowsOutput>;
}
