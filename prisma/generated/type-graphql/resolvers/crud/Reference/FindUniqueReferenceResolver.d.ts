import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReferenceArgs } from "./args/FindUniqueReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class FindUniqueReferenceResolver {
    reference(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReferenceArgs): Promise<Reference | null>;
}
