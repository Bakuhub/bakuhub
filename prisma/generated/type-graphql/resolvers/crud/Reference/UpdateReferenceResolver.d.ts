import { GraphQLResolveInfo } from "graphql";
import { UpdateReferenceArgs } from "./args/UpdateReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class UpdateReferenceResolver {
    updateReference(ctx: any, info: GraphQLResolveInfo, args: UpdateReferenceArgs): Promise<Reference | null>;
}
