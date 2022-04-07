import { GraphQLResolveInfo } from "graphql";
import { CreateReferenceArgs } from "./args/CreateReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class CreateReferenceResolver {
    createReference(ctx: any, info: GraphQLResolveInfo, args: CreateReferenceArgs): Promise<Reference>;
}
