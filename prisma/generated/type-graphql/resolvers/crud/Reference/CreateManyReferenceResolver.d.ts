import { GraphQLResolveInfo } from "graphql";
import { CreateManyReferenceArgs } from "./args/CreateManyReferenceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReferenceResolver {
    createManyReference(ctx: any, info: GraphQLResolveInfo, args: CreateManyReferenceArgs): Promise<AffectedRowsOutput>;
}
