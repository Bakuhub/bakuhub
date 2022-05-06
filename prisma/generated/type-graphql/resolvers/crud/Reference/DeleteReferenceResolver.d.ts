import { GraphQLResolveInfo } from "graphql";
import { DeleteReferenceArgs } from "./args/DeleteReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class DeleteReferenceResolver {
    deleteReference(ctx: any, info: GraphQLResolveInfo, args: DeleteReferenceArgs): Promise<Reference | null>;
}
