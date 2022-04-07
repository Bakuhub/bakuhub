import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReferenceArgs } from "./args/UpdateManyReferenceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReferenceResolver {
    updateManyReference(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReferenceArgs): Promise<AffectedRowsOutput>;
}
