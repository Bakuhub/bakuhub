import { GraphQLResolveInfo } from "graphql";
import { FindFirstReferenceArgs } from "./args/FindFirstReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class FindFirstReferenceResolver {
    findFirstReference(ctx: any, info: GraphQLResolveInfo, args: FindFirstReferenceArgs): Promise<Reference | null>;
}
